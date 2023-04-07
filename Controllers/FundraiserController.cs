using Microsoft.AspNetCore.Mvc;
using Npgsql;
using FundApp.Models;

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

        // GET: api/<FundraiserCreationController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<FundraiserCreationController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
