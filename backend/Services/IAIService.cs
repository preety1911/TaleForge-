using System.Threading.Tasks;
using StoryTeacher.Api.Models;

namespace StoryTeacher.Api.Services
{
    public interface IAIService
    {
        Task<GenerateStoryResponse> GenerateStoryAsync(GenerateStoryRequest request);
        Task<ReteachResponse> GenerateReTeachStoryAsync(ReteachRequest request);
        Task<LearningResult> EvaluateQuizAsync(EvaluateQuizRequest request);
    }
}
