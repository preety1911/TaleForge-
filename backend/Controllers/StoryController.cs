using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StoryTeacher.Api.Models;
using StoryTeacher.Api.Services;

namespace StoryTeacher.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoryController : ControllerBase
    {
        private readonly IAIService _aiService;

        public StoryController(IAIService aiService)
        {
            _aiService = aiService;
        }

        [HttpPost("generate")]
        public async Task<ActionResult<GenerateStoryResponse>> Generate([FromBody] GenerateStoryRequest request)
        {
            if (request == null)
            {
                return BadRequest("Invalid student request data.");
            }

            var response = await _aiService.GenerateStoryAsync(request);
            return Ok(response);
        }

        [HttpPost("reteach")]
        public async Task<ActionResult<ReteachResponse>> Reteach([FromBody] ReteachRequest request)
        {
            if (request == null)
            {
                return BadRequest("Invalid reteach request data.");
            }

            var response = await _aiService.GenerateReTeachStoryAsync(request);
            return Ok(response);
        }
    }
}
