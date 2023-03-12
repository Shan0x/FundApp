using FundApp.Data;
using FundApp.Models;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System.Data;
using System.Diagnostics.Contracts;

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public string login(Users users)
        {
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlDataAdapter da = new NpgsqlDataAdapter("SELECT * FROM \"Users\" WHERE \"userName\" = '"+users.userName+"' AND \"userPassword\" = '"+users.userPassword+"'", conn);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
                return "User Found";
            else
                return "User not found";
        }
    }
}
