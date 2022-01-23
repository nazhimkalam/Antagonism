using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Antagonism.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
