// Controllers/ConfigController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

[ApiController]
[Route("api/[controller]")]
public class ConfigController : ControllerBase
{
    private readonly WatsonEmbedOptions _options;

    public ConfigController(IOptions<WatsonEmbedOptions> options)
        => _options = options.Value;

    [HttpGet("watson")]
    public IActionResult GetWatsonConfig() => Ok(new
    {
        integrationID     = _options.IntegrationID,
        region            = _options.Region,
        serviceInstanceID = _options.ServiceInstanceID,
    });
}