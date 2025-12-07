using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class SupplementsController : ControllerBase
{
    private readonly SupplementService _svc;

    public SupplementsController(SupplementService svc)
    {
        _svc = svc;
    }

    [HttpGet]
    public IActionResult Get() => Ok(_svc.GetAll());
}
