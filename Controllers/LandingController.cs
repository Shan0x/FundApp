using Microsoft.AspNetCore.Mvc;

namespace FundApp.Controllers
{
    public class LandingController : Controller
    {
        public IActionResult Landing()
        {
            return View();
        }
    }
}
