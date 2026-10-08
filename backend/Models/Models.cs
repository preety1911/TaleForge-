using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace StoryTeacher.Api.Models
{
    public class Student
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("age")]
        public int Age { get; set; }

        [JsonPropertyName("classLevel")]
        public string ClassLevel { get; set; } = string.Empty;

        [JsonPropertyName("subject")]
        public string Subject { get; set; } = string.Empty;

        [JsonPropertyName("topic")]
        public string Topic { get; set; } = string.Empty;

        [JsonPropertyName("difficulty")]
        public string Difficulty { get; set; } = "Easy";
    }

    public class LearningConcept
    {
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;

        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;

        [JsonPropertyName("description")]
        public string Description { get; set; } = string.Empty;
    }

    public class StoryDialogue
    {
        [JsonPropertyName("character")]
        public string Character { get; set; } = string.Empty;

        [JsonPropertyName("speech")]
        public string Speech { get; set; } = string.Empty;
    }

    public class StoryPage
    {
        [JsonPropertyName("pageNumber")]
        public int PageNumber { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; } = string.Empty;

        [JsonPropertyName("content")]
        public string Content { get; set; } = string.Empty;

        [JsonPropertyName("conceptIds")]
        public List<string> ConceptIds { get; set; } = new();

        [JsonPropertyName("conceptName")]
        public string ConceptName { get; set; } = string.Empty;

        [JsonPropertyName("dialogue")]
        public StoryDialogue? Dialogue { get; set; }

        [JsonPropertyName("visualType")]
        public string VisualType { get; set; } = "ocean_intro";
    }

    public class QuizOption
    {
        [JsonPropertyName("text")]
        public string Text { get; set; } = string.Empty;

        [JsonPropertyName("isCorrect")]
        public bool IsCorrect { get; set; }
    }

    public class QuizQuestion
    {
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;

        [JsonPropertyName("question")]
        public string Question { get; set; } = string.Empty;

        [JsonPropertyName("options")]
        public List<QuizOption> Options { get; set; } = new();

        [JsonPropertyName("correctAnswer")]
        public int CorrectAnswer { get; set; }

        [JsonPropertyName("conceptId")]
        public string ConceptId { get; set; } = string.Empty;

        [JsonPropertyName("conceptName")]
        public string ConceptName { get; set; } = string.Empty;

        [JsonPropertyName("explanation")]
        public string Explanation { get; set; } = string.Empty;
    }

    public class ConceptScore
    {
        [JsonPropertyName("conceptId")]
        public string ConceptId { get; set; } = string.Empty;

        [JsonPropertyName("conceptName")]
        public string ConceptName { get; set; } = string.Empty;

        [JsonPropertyName("correctAnswers")]
        public int CorrectAnswers { get; set; }

        [JsonPropertyName("totalQuestions")]
        public int TotalQuestions { get; set; }

        [JsonPropertyName("score")]
        public int Score { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; } = "Needs Review"; // Strong (>=80), Needs Practice (50-79), Needs Review (<50)
    }

    public class LearningResult
    {
        [JsonPropertyName("totalQuestions")]
        public int TotalQuestions { get; set; }

        [JsonPropertyName("correctAnswers")]
        public int CorrectAnswers { get; set; }

        [JsonPropertyName("score")]
        public int Score { get; set; }

        [JsonPropertyName("conceptScores")]
        public List<ConceptScore> ConceptScores { get; set; } = new();

        [JsonPropertyName("strongConcepts")]
        public List<ConceptScore> StrongConcepts { get; set; } = new();

        [JsonPropertyName("weakConcepts")]
        public List<ConceptScore> WeakConcepts { get; set; } = new();
    }

    // Requests and Responses
    public class GenerateStoryRequest : Student
    {
    }

    public class GenerateStoryResponse
    {
        [JsonPropertyName("title")]
        public string Title { get; set; } = string.Empty;

        [JsonPropertyName("topic")]
        public string Topic { get; set; } = string.Empty;

        [JsonPropertyName("concepts")]
        public List<LearningConcept> Concepts { get; set; } = new();

        [JsonPropertyName("pages")]
        public List<StoryPage> Pages { get; set; } = new();

        [JsonPropertyName("questions")]
        public List<QuizQuestion> Questions { get; set; } = new();
    }

    public class EvaluateQuizRequest
    {
        [JsonPropertyName("questions")]
        public List<QuizQuestion> Questions { get; set; } = new();

        [JsonPropertyName("answers")]
        public Dictionary<string, int> Answers { get; set; } = new();
    }

    public class ReteachPanel
    {
        [JsonPropertyName("panel")]
        public int Panel { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; } = string.Empty;

        [JsonPropertyName("description")]
        public string Description { get; set; } = string.Empty;

        [JsonPropertyName("analogy")]
        public string Analogy { get; set; } = string.Empty;

        [JsonPropertyName("dialogue")]
        public string Dialogue { get; set; } = string.Empty;
    }

    public class ReteachRequest
    {
        [JsonPropertyName("student")]
        public Student? Student { get; set; }

        [JsonPropertyName("topic")]
        public string Topic { get; set; } = string.Empty;

        [JsonPropertyName("weakConcepts")]
        public List<ConceptScore> WeakConcepts { get; set; } = new();
    }

    public class ReteachResponse
    {
        [JsonPropertyName("title")]
        public string Title { get; set; } = string.Empty;

        [JsonPropertyName("subtitle")]
        public string Subtitle { get; set; } = string.Empty;

        [JsonPropertyName("weakConcept")]
        public ConceptScore? WeakConcept { get; set; }

        [JsonPropertyName("content")]
        public List<ReteachPanel> Content { get; set; } = new();

        [JsonPropertyName("questions")]
        public List<QuizQuestion> Questions { get; set; } = new();
    }
}
