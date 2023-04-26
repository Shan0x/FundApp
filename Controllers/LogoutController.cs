using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogoutController : Controller
    {
        [HttpPost]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("UserID");
            return Ok();
        }
    }
}
