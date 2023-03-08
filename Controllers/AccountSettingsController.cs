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
        public void Post([FromBody] Users user)
        {
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("UPDATE Users SET userPassword=\'" + user.userPassword + "\' WHERE userName=\'" + user.userName + "\';", conn);

            conn.Open();
            int i = cmd.ExecuteNonQuery();
            conn.Close();

            if (i > 0)
            {
                Console.WriteLine("Password change success!");
            }
            else
            {
                Console.WriteLine("Password change failure!");
            }
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
