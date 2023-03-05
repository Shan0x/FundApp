using Npgsql;
using Microsoft.AspNetCore.Mvc;
using FundApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SignupController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // GET: api/<SignupController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SignupController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<SignupController>
        [HttpPost]
        public string registration(Users users)
        {
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlCommand cmd = new NpgsqlCommand("INSERT INTO \"Users\"(\"userName\", \"userPassword\", \"userFirstName\", \"userLastName\", \"userEmail\", \"userDOB\") VALUES('" + users.userName + "','" + users.userPassword + "','" + users.userFirstName + "','" + users.userLastName + "','" + users.userEmail + "','" + users.userDOB + "')", conn);
            conn.Open();
            int i = cmd.ExecuteNonQuery();
            conn.Close();
            if (i > 0)
                return "Data inserted";
            else
                return "Error";
        }

        // PUT api/<SignupController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SignupController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
