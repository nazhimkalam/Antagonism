using Microsoft.AspNetCore.Mvc;

namespace Antagonism.Controllers
{
    public class DetectorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
