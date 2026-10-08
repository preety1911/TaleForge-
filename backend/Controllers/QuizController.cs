using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StoryTeacher.Api.Models;
using StoryTeacher.Api.Services;

namespace StoryTeacher.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly IAIService _aiService;

        public QuizController(IAIService aiService)
        {
            _aiService = aiService;
        }

        [HttpPost("evaluate")]
        public async Task<ActionResult<LearningResult>> Evaluate([FromBody] EvaluateQuizRequest request)
        {
            if (request == null || request.Questions == null)
            {
                return BadRequest("Invalid quiz evaluation request.");
            }

            var result = await _aiService.EvaluateQuizAsync(request);
            return Ok(result);
        }
    }
}
