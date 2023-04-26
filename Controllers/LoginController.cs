using FundApp.Models;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System.Data;

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
        public async Task<IActionResult> login(Users users)
        {
            NpgsqlConnection conn = new NpgsqlConnection(_configuration.GetConnectionString("localconnection").ToString());
            NpgsqlDataAdapter da = new NpgsqlDataAdapter("SELECT * FROM \"Users\" WHERE \"userName\" = '"+users.userName+"' AND \"userPassword\" = '"+users.userPassword+"'", conn);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                int userId = Convert.ToInt32(dt.Rows[0].Field<object>("userID"));

                // Create a cookie with the authenticated user's ID
                Response.Cookies.Append("UserID", userId.ToString(), new CookieOptions
                {
                    HttpOnly = false, // This allows access via client side.
                    Expires = DateTimeOffset.UtcNow.AddDays(2),
                    SameSite = SameSiteMode.Lax
                });
                return Ok(new { userId });
            }
            else
                return Unauthorized();
        }

    }
}
