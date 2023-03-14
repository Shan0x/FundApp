using FundApp.Data;
using FundApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public LoginController(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public IActionResult Login(Users model)
        {
            if (ModelState.IsValid)
            {
                var user = from row in _context.Users select row;
                user = user.Where(s => s.userName.Contains(model.userName));
                if (user.Count() != 0)
                {
                    if (user.First().userPassword == model.userPassword)
                    {
                        return RedirectToAction("SuccessLogin");
                    }
                }
            }
            return RedirectToAction("FailedLogin");
        }

        public IActionResult SuccessLogin()
        {
            return View();
        }

        public IActionResult FailedLogin()
        {
            return View();
        }
    }
}

