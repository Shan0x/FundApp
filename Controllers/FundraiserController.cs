using Microsoft.AspNetCore.Mvc;
using Npgsql;
using FundApp.Models;
using System.Text.RegularExpressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FundraiserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public FundraiserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private bool checkUserFundraiserEntries(int? userID)
        {//Checks if the specified user has less than 5 fundraiser entries in the DB
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("SELECT COUNT(\"userID\") FROM \"Fundraiser\" WHERE \"userID\"=" + userID + " AND \"fundraiserStatus\"=\'ACTIVE\';", conn);

            conn.Open();
            NpgsqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                if (reader.GetInt32(0) >= 5)
                {//User has 5 or mor(somehow) fundraiser entries
                    return false;
                }
            }
            conn.Close();

            return true;
        }

        // GET: api/<FundraiserController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
                NpgsqlCommand cmd = new NpgsqlCommand(@"
                SELECT F.*, COALESCE(SUM(D.""donationAmount""), 0) AS ""totalDonations""
                FROM ""Fundraiser"" f
                LEFT JOIN ""Donations"" D ON F.""fundraiserID"" = D.""fundraiserID""
                GROUP BY F.""fundraiserID"";", conn);

                conn.Open();
                NpgsqlDataReader reader = cmd.ExecuteReader();

                List<Fundraiser> fundraisers = new List<Fundraiser>();

                while (reader.Read())
                {
                    Fundraiser fundraiser = new Fundraiser
                    {
                        // Update with appropriate column names from your database
                        fundraiserID = reader.GetInt32(0),
                        userID = reader.GetInt32(1),
                        fundraiserStatus = reader.GetString(2),
                        fundraiserName = reader.GetString(3),
                        fundraiserSummary = reader.GetString(4),
                        fundraiserGoalAmount = reader.GetDouble(5),
                        totalDonations = reader.GetDouble(7),
                        fundraiserDateCreated = DateOnly.FromDateTime(reader.GetDateTime(6))
                    };

                    fundraisers.Add(fundraiser);
                }

                conn.Close();

                return Ok(fundraisers);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error getting fundraisers: " + ex.Message);
            }
        }

        // GET api/<FundraiserController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand(@"
                SELECT F.*, COALESCE(SUM(D.""donationAmount""), 0) AS ""totalDonations""
                FROM ""Fundraiser"" f
                LEFT JOIN ""Donations"" D ON F.""fundraiserID"" = D.""fundraiserID""
                WHERE F.""fundraiserID"" = @id
                GROUP BY F.""fundraiserID"";", conn);
            cmd.Parameters.AddWithValue("id", id);

            conn.Open();
            NpgsqlDataReader reader = cmd.ExecuteReader();

            if (reader.HasRows)
            {
                reader.Read();

                Fundraiser fundraiser = new Fundraiser()
                {
                    fundraiserID = reader.GetInt32(0),
                    userID = reader.GetInt32(1),
                    fundraiserStatus = reader.GetString(2),
                    fundraiserName = reader.GetString(3),
                    fundraiserSummary = reader.GetString(4),
                    fundraiserGoalAmount = reader.GetDouble(5),
                    totalDonations = reader.GetDouble(7),
                    fundraiserDateCreated = DateOnly.FromDateTime(reader.GetDateTime(6))
                };

                conn.Close();

                return Ok(fundraiser);
            }
            else
            {
                conn.Close();

                return NotFound();
            }
        }

        // POST api/<FundraiserCreationController>
        [HttpPost]
        [Route("create")]
        public bool CreateFundraiser([FromBody] Fundraiser fundraiser)
        {
            int? userID = fundraiser.userID;
            string? fundName = fundraiser.fundraiserName;
            string? fundSummary = fundraiser.fundraiserSummary;
            double? fundGoalAmt = fundraiser.fundraiserGoalAmount;
            bool isQuerySuccess = true;

            if ((userID < 1) || (fundGoalAmt < 100) || (fundName == "") || (fundSummary == "") || (userID == null) || (fundName == null) || (fundSummary == null) || (fundGoalAmt == null))
            {//General variable validation
                return false;
            }

            if(!checkUserFundraiserEntries(userID))
            {//User has reached fundraiser limit
                return false;
            }
            else
            {//User has not reached fundraiser limit
                NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
                NpgsqlCommand cmd = new NpgsqlCommand("INSERT INTO \"Fundraiser\"(\"userID\", \"fundraiserName\", \"fundraiserSummary\", \"fundraiserGoalAmount\") VALUES(" + userID + ", \'" + fundName + "\', \'" + fundSummary + "\', " + fundGoalAmt + ");", conn);

                conn.Open();
                int queryExecutionStatus = cmd.ExecuteNonQuery();
                conn.Close();

                if (queryExecutionStatus == 0)
                {//The query didn't affect any rows
                    isQuerySuccess = false;
                }
            }

            //Successful execution exit
            return isQuerySuccess;
        }

        // PUT api/<FundraiserCreationController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FundraiserCreationController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
