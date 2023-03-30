using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using FundApp.Models;
using Npgsql;


namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountSettingsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AccountSettingsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<AccountSettingsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // POST api/<AccountSettingsController>
        [HttpPost]
        [Route("update/password")]
        public bool updatePassword([FromBody] SettingsUpdateRequest req)
        {
            //Boolean to return to the frontend to inform it whether the query was successful or not
            bool isQuerySuccess = true;

//!!!!!The query building is currently vulnerable to injection since there is no input sanitization at this time!!!!!
            //Building query with input from the frontend/user
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("UPDATE \"Users\" SET \"userPassword\"=\'" + req.newUserPassword + "\' WHERE \"userName\"=\'" + req.userName + "\' AND \"userPassword\"=\'" + req.userPassword + "\';", conn);

            conn.Open();
            int queryExecutionStatus = cmd.ExecuteNonQuery();
            conn.Close();

            if (queryExecutionStatus == 0)
            {//ExecuteNonQuery() returns 0 on a failed query
                isQuerySuccess = false;
            }

            return isQuerySuccess;
        }

        [HttpPost]
        [Route("update/email")]
        public bool updateEmail([FromBody] SettingsUpdateRequest req)
        {
            //Boolean to return to the frontend to inform it whether the query was successful or not
            bool isQuerySuccess = true;

//!!!!!The query building is currently vulnerable to injection since there is no input sanitization at this time!!!!!
            //Building query with input from the frontend/user
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("UPDATE \"Users\" SET \"userEmail\"=\'" + req.userEmail + "\' WHERE \"userName\"=\'" + req.userName + "\';", conn);

            conn.Open();
            int queryExecutionStatus = cmd.ExecuteNonQuery();
            conn.Close();

            if (queryExecutionStatus == 0)
            {//ExecuteNonQuery() returns 0 on a failed query
                isQuerySuccess = false;
            }

            return isQuerySuccess;
        }

        [HttpPost]
        [Route("update/delete")]
        public bool deleteAccount([FromBody] SettingsUpdateRequest req)
        {
            //Boolean to return to the frontend to inform it whether the query was successful or not
            bool isQuerySuccess = true;

//!!!!!The query building is currently vulnerable to injection since there is no input sanitization at this time!!!!!
            //Building query with input from the frontend/user
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("DELETE FROM \"Users\" WHERE \"userName\"=\'" + req.userName + "\' AND \"userPassword\"=\'" + req.userPassword + "\';", conn);

            conn.Open();
            int queryExecutionStatus = cmd.ExecuteNonQuery();
            conn.Close();

            if (queryExecutionStatus == 0)
            {//ExecuteNonQuery() returns 0 on a failed query
                isQuerySuccess = false;
            }

            return isQuerySuccess;
        }
    }
}
