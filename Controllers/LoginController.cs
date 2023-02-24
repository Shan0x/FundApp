using FundApp.Data;
using FundApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Diagnostics.Contracts;

namespace FundApp.Controllers
{
    public class LoginController : Controller
    {
        private readonly FundFriendsContext _context;

        public LoginController(FundFriendsContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(Users model)
        {
            if (ModelState.IsValid)
            {
                var User = from row in _context.Users select row;
                User = User.Where(s => s.userName.Contains(model.userName));
                if (User.Count() != 0)
                {
                    if (User.First().userPassword == model.userPassword ) 
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
