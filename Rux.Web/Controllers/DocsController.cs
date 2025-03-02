using Microsoft.AspNetCore.Mvc;

namespace Rux.Web.Controllers;

public class DocsController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}