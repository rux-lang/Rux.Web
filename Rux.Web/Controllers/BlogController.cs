using Microsoft.AspNetCore.Mvc;

namespace Rux.Web.Controllers;

public class BlogController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}