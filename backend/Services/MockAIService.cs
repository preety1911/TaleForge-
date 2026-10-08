using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeacher.Api.Models;

namespace StoryTeacher.Api.Services
{
    public class MockAIService : IAIService
    {
        public Task<GenerateStoryResponse> GenerateStoryAsync(GenerateStoryRequest request)
        {
            var studentName = string.IsNullOrWhiteSpace(request.Name) ? "Aarav" : request.Name;
            var topic = string.IsNullOrWhiteSpace(request.Topic) ? "Water Cycle" : request.Topic;

            var concepts = new List<LearningConcept>
            {
                new() { Id = "c1", Name = "Evaporation", Description = "Sun heating surface water into vapor that rises." },
                new() { Id = "c2", Name = "Condensation", Description = "Cooling water vapor gathering into fluffy clouds." },
                new() { Id = "c3", Name = "Precipitation", Description = "Clouds releasing heavy moisture as rain or snow." },
                new() { Id = "c4", Name = "Collection", Description = "Water gathering back in oceans, lakes, and underground reservoirs." }
            };

            var pages = new List<StoryPage>
            {
                new()
                {
                    PageNumber = 1,
                    Title = $"Meet Leo the Water Droplet!",
                    Content = $"Deep in the shimmering sapphire ocean lived Leo, a curious little water droplet. Leo spent his days splashing with sea turtles and whispering secrets to playful dolphins. But Leo had a big, wild dream: 'One day, I want to soar high into the boundless sky with {studentName}!'",
                    ConceptIds = new() { "c1" },
                    ConceptName = "Evaporation",
                    Dialogue = new() { Character = "Leo", Speech = "Look at the great sky! I wonder what it feels like to fly among the birds!" },
                    VisualType = "ocean_intro"
                },
                new()
                {
                    PageNumber = 2,
                    Title = "The Warm Hug from Mr. Sun (Evaporation)",
                    Content = "The next morning, Mr. Sun beamed brightly with warm golden rays. Leo felt warm, lighter, and ticklish! Before he knew it, he turned into an invisible mist called water vapor and began floating upward, leaving the ocean waves behind.",
                    ConceptIds = new() { "c1" },
                    ConceptName = "Evaporation",
                    Dialogue = new() { Character = "Mr. Sun", Speech = "Warm up, little Leo! Turn into light vapor and let the wind lift you up!" },
                    VisualType = "sun_evaporation"
                },
                new()
                {
                    PageNumber = 3,
                    Title = "Cloud Castle Party (Condensation)",
                    Content = "High up in the cool sky, Leo shivered happily. The chilly air caused him and billions of fellow water droplets to hug together tightly. Pop! They transformed into fluffy white clouds floating like giant cotton candies across the blue sky.",
                    ConceptIds = new() { "c2" },
                    ConceptName = "Condensation",
                    Dialogue = new() { Character = "Cloud Pals", Speech = "Hold hands tightly! When we cool down, we make a big puffy cloud!" },
                    VisualType = "cloud_condensation"
                },
                new()
                {
                    PageNumber = 4,
                    Title = "The Great Sky Drop Ride (Precipitation)",
                    Content = "As more droplets joined, the cloud grew dark, heavy, and full of giggles. 'Wheee!' cried Leo as gravity gently called him home. He whooshed through the air as refreshing raindrops, watering sunflower fields and mountain hills below.",
                    ConceptIds = new() { "c3" },
                    ConceptName = "Precipitation",
                    Dialogue = new() { Character = "Leo", Speech = "We're too heavy to float now! Hold on tight, here comes the splash!" },
                    VisualType = "rain_precipitation"
                },
                new()
                {
                    PageNumber = 5,
                    Title = "The Grand Journey Home (Collection)",
                    Content = "Leo splashed into a babbling brook! The stream raced over smooth pebbles into a calm blue river, which carried Leo all the way back to the vast ocean where his grand adventure began, ready for another day.",
                    ConceptIds = new() { "c4" },
                    ConceptName = "Collection",
                    Dialogue = new() { Character = "River Stream", Speech = "Follow the current, friend! Every droplet gathers back in rivers and oceans!" },
                    VisualType = "river_collection"
                }
            };

            var questions = new List<QuizQuestion>
            {
                new()
                {
                    Id = "q1",
                    ConceptId = "c1",
                    ConceptName = "Evaporation",
                    Question = "What happens when the Sun warms up ocean water?",
                    Options = new()
                    {
                        new() { Text = "It freezes into giant icebergs", IsCorrect = false },
                        new() { Text = "It turns into water vapor and rises up", IsCorrect = true },
                        new() { Text = "It sinks straight to the ocean floor", IsCorrect = false },
                        new() { Text = "It turns into red lava", IsCorrect = false }
                    },
                    CorrectAnswer = 1,
                    Explanation = "Evaporation happens when warmth turns liquid water into invisible gas (vapor) that floats up!"
                },
                new()
                {
                    Id = "q2",
                    ConceptId = "c2",
                    ConceptName = "Condensation",
                    Question = "How do water droplets in the cold high sky form fluffy clouds?",
                    Options = new()
                    {
                        new() { Text = "They cook like pancakes", IsCorrect = false },
                        new() { Text = "They cool down and cluster together", IsCorrect = true },
                        new() { Text = "They get painted by rainbows", IsCorrect = false },
                        new() { Text = "They vanish forever", IsCorrect = false }
                    },
                    CorrectAnswer = 1,
                    Explanation = "Condensation occurs when cool air brings vapor droplets together to form clouds!"
                },
                new()
                {
                    Id = "q3",
                    ConceptId = "c2",
                    ConceptName = "Condensation",
                    Question = "When you see dew drops on morning grass or steam on a mirror, what process caused it?",
                    Options = new()
                    {
                        new() { Text = "Condensation (cooling vapor turns to droplets)", IsCorrect = true },
                        new() { Text = "Sunburn", IsCorrect = false },
                        new() { Text = "Earthquake vibrations", IsCorrect = false },
                        new() { Text = "Rapid boiling", IsCorrect = false }
                    },
                    CorrectAnswer = 0,
                    Explanation = "When warm moist air touches cool glass or grass, condensation turns it back into tiny drops!"
                },
                new()
                {
                    Id = "q4",
                    ConceptId = "c3",
                    ConceptName = "Precipitation",
                    Question = "When clouds become too heavy with water, what occurs?",
                    Options = new()
                    {
                        new() { Text = "The clouds turn into gold coins", IsCorrect = false },
                        new() { Text = "They fall as rain, snow, or hail (Precipitation)", IsCorrect = true },
                        new() { Text = "They float to outer space", IsCorrect = false },
                        new() { Text = "Nothing happens", IsCorrect = false }
                    },
                    CorrectAnswer = 1,
                    Explanation = "Precipitation is when condensed water drops fall back to Earth as rain, sleet, or snow."
                },
                new()
                {
                    Id = "q5",
                    ConceptId = "c4",
                    ConceptName = "Collection",
                    Question = "Where does rainwater gather after falling back onto mountains and plains?",
                    Options = new()
                    {
                        new() { Text = "It disappears from Earth completely", IsCorrect = false },
                        new() { Text = "It turns into solid rocks", IsCorrect = false },
                        new() { Text = "It collects in streams, lakes, and oceans (Collection)", IsCorrect = true },
                        new() { Text = "It stays floating mid-air forever", IsCorrect = false }
                    },
                    CorrectAnswer = 2,
                    Explanation = "Collection is when water gathers back into puddles, streams, rivers, and oceans to repeat the cycle."
                }
            };

            var response = new GenerateStoryResponse
            {
                Title = $"{studentName}'s Adventure in {topic}",
                Topic = topic,
                Concepts = concepts,
                Pages = pages,
                Questions = questions
            };

            return Task.FromResult(response);
        }

        public Task<LearningResult> EvaluateQuizAsync(EvaluateQuizRequest request)
        {
            var conceptMap = new Dictionary<string, ConceptScore>();
            int totalCorrect = 0;

            foreach (var q in request.Questions)
            {
                var conceptId = string.IsNullOrEmpty(q.ConceptId) ? "general" : q.ConceptId;
                var conceptName = string.IsNullOrEmpty(q.ConceptName) ? "General" : q.ConceptName;

                if (!conceptMap.TryGetValue(conceptId, out var cScore))
                {
                    cScore = new ConceptScore
                    {
                        ConceptId = conceptId,
                        ConceptName = conceptName,
                        TotalQuestions = 0,
                        CorrectAnswers = 0
                    };
                    conceptMap[conceptId] = cScore;
                }

                cScore.TotalQuestions++;

                if (request.Answers.TryGetValue(q.Id, out int userAnswer) && userAnswer == q.CorrectAnswer)
                {
                    cScore.CorrectAnswers++;
                    totalCorrect++;
                }
            }

            var conceptScores = new List<ConceptScore>();
            foreach (var c in conceptMap.Values)
            {
                c.Score = c.TotalQuestions > 0 ? (int)Math.Round((double)c.CorrectAnswers / c.TotalQuestions * 100) : 0;
                if (c.Score >= 80)
                {
                    c.Status = "Strong";
                }
                else if (c.Score >= 50)
                {
                    c.Status = "Needs Practice";
                }
                else
                {
                    c.Status = "Needs Review";
                }
                conceptScores.Add(c);
            }

            int overallScore = request.Questions.Count > 0
                ? (int)Math.Round((double)totalCorrect / request.Questions.Count * 100)
                : 0;

            var result = new LearningResult
            {
                TotalQuestions = request.Questions.Count,
                CorrectAnswers = totalCorrect,
                Score = overallScore,
                ConceptScores = conceptScores,
                StrongConcepts = conceptScores.Where(c => c.Status == "Strong").ToList(),
                WeakConcepts = conceptScores.Where(c => c.Status != "Strong").ToList()
            };

            return Task.FromResult(result);
        }

        public Task<ReteachResponse> GenerateReTeachStoryAsync(ReteachRequest request)
        {
            var targetConcept = request.WeakConcepts?.FirstOrDefault() ?? new ConceptScore { ConceptId = "c4", ConceptName = "Collection", Score = 0 };

            var panels = new List<ReteachPanel>
            {
                new()
                {
                    Panel = 1,
                    Title = "Where Do Drops Go Next?",
                    Description = "After falling from storm clouds, drops don't just disappear! They flow downhill into puddles, streams, and lakes.",
                    Analogy = "Think of a playground slide ending right in a big ball pit! All balls end up together at the bottom.",
                    Dialogue = "Coco: 'Follow me! Gravity slides us all into our cozy ocean home!'"
                },
                new()
                {
                    Panel = 2,
                    Title = "Nature's Giant Reservoir",
                    Description = "Collection is simply nature's gathering party. Oceans, rivers, underground aquifers, and quiet ponds hold the water so the cycle can start again.",
                    Analogy = "Just like collecting your favorite stickers together in one special sticker book!",
                    Dialogue = "Milo: 'Collection = Gathering! Liquid water comes together in one big place.'"
                }
            };

            var questions = new List<QuizQuestion>
            {
                new()
                {
                    Id = "rq1",
                    ConceptId = targetConcept.ConceptId,
                    ConceptName = targetConcept.ConceptName,
                    Question = "When rain slides down mountains into calm blue lakes, what stage of the water cycle is this?",
                    Options = new()
                    {
                        new() { Text = "Collection (water gathers in bodies of water)", IsCorrect = true },
                        new() { Text = "Freezing into snowballs", IsCorrect = false },
                        new() { Text = "Disappearing into space", IsCorrect = false }
                    },
                    CorrectAnswer = 0,
                    Explanation = "Bingo! Water gathering into lakes, oceans, and rivers is called Collection."
                },
                new()
                {
                    Id = "rq2",
                    ConceptId = targetConcept.ConceptId,
                    ConceptName = targetConcept.ConceptName,
                    Question = "Why is the Collection stage so important for living things on Earth?",
                    Options = new()
                    {
                        new() { Text = "It stores fresh water that animals, trees, and people can drink and use", IsCorrect = true },
                        new() { Text = "It makes the Earth heavier every day", IsCorrect = false },
                        new() { Text = "It stops the sun from shining", IsCorrect = false }
                    },
                    CorrectAnswer = 0,
                    Explanation = "Exactly! Collection creates rivers and lakes where animals drink and plants drink from roots."
                }
            };

            var response = new ReteachResponse
            {
                Title = "Meet Coco & The Secret Basin!",
                Subtitle = $"Let's make {targetConcept.ConceptName} super easy!",
                WeakConcept = targetConcept,
                Content = panels,
                Questions = questions
            };

            return Task.FromResult(response);
        }
    }
}
