using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using FundApp.Models;
using Npgsql;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        // GET api/<AccountSettingsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AccountSettingsController>
        [HttpPost]
        [Route("update/password")]
        public bool updatePassword([FromBody] Users user)
        {
            bool isQuerySuccess = true;

            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("UPDATE \"Users\" SET \"userPassword\"=\'" + user.userPassword + "\' WHERE \"userName\"=\'" + user.userName + "\';", conn);

            conn.Open();
            int queryExecutionStatus = cmd.ExecuteNonQuery();
            conn.Close();

            if (queryExecutionStatus == 0)
            {
                isQuerySuccess = false;
            }

            return isQuerySuccess;
        }

        [HttpPost]
        [Route("update/email")]
        public bool updateEmail([FromBody] Users user)
        {
            bool isQuerySuccess = true;

            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("UPDATE \"Users\" SET \"userEmail\"=\'" + user.userEmail + "\' WHERE \"userName\"=\'" + user.userName + "\';", conn);

            conn.Open();
            int queryExecutionStatus = cmd.ExecuteNonQuery();
            conn.Close();

            if (queryExecutionStatus == 0)
            {
                isQuerySuccess = false;
            }

            return isQuerySuccess;
        }

        // PUT api/<AccountSettingsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AccountSettingsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
