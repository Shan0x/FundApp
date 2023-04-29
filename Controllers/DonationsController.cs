using Microsoft.AspNetCore.Mvc;
using Npgsql;
using FundApp.Models;
using System.Text.RegularExpressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonationsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public DonationsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // POST api/<FundraiserCreationController>
        [HttpPost]
        public bool CreateDonation(Donations donations)
        {
            bool querySuccess = false;

            using (NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection")))
            {
                conn.Open();

                using (NpgsqlCommand cmd = new NpgsqlCommand(
                    "INSERT INTO \"Donations\"(\"fundraiserID\", \"donationAmount\", \"donatorName\") " +
                    "VALUES(@fundraiserID, @donationAmount, @donatorName)", conn))
                {
                    cmd.Parameters.AddWithValue("@fundraiserID", donations.fundraiserID);
                    cmd.Parameters.AddWithValue("@donationAmount", donations.donationAmount);
                    cmd.Parameters.AddWithValue("@donatorName", donations.donatorName);

                    int queryExecutionStatus = cmd.ExecuteNonQuery();

                    if (queryExecutionStatus > 0)
                    {
                        // Update totalDonation in Fundraiser table
                        using (NpgsqlCommand updateCmd = new NpgsqlCommand(
                            "UPDATE \"Fundraiser\" " +
                            "SET \"totalDonations\" = \"totalDonations\" + @donationAmount " +
                            "WHERE \"fundraiserID\" = @fundraiserID", conn))
                        {
                            updateCmd.Parameters.AddWithValue("@fundraiserID", donations.fundraiserID);
                            updateCmd.Parameters.AddWithValue("@donationAmount", donations.donationAmount);

                            int updateQueryExecutionStatus = updateCmd.ExecuteNonQuery();
                            if (updateQueryExecutionStatus > 0)
                            {
                                querySuccess = true;
                            }
                        }
                    }
                }
            }

            return querySuccess;
        }
    }
}
