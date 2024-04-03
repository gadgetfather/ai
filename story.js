import { openai } from "./openai.js";

async function story() {
  try {
    // const prompt =
    //   "story regarding why it is important to brush in morning and night";
    // const ageGroup = "5-10 years";
    // const message = "Importance of brushing teeth in the morning and night";

    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You are a story creator for kids and a prompt generator for the same story.",
    //     },
    //     {
    //       role: "user",
    //       content: `Based on the prompt: "${prompt}", for the age group of ${ageGroup}, that teaches the message "${message}", create a story structured into 5 paragraphs, each containing about 30 words. After each paragraph, generate a detailed prompt that could be used to create an anime-style illustration representing the story segment. Ensure the story is engaging, age-appropriate, and conveys the intended message clearly.`,
    //     },
    //   ],
    //   model: "gpt-3.5-turbo-0125",
    // });

    // // Example parsing logic to separate the story text and the generated prompts from the completion response
    // const responseText = completion.choices[0].message.content; // Get the full text from the response
    // const segments = responseText.split("\n\n"); // Assuming a double newline separates story paragraphs from their corresponding prompts

    // const jsonResponse = segments.reduce((acc, segment, index) => {
    //   // Assuming an alternating pattern of story paragraph and prompt
    //   if (index % 2 === 0) {
    //     // Story paragraphs are at even indices
    //     acc.push({
    //       id: `unique_id_${index / 2}`,
    //       story: segment.trim(),
    //       imagePrompt: "", // Placeholder, to be filled by the next segment
    //       image: "", // Placeholder for the image URL, to be populated later
    //     });
    //   } else {
    //     // Corresponding prompts are at odd indices, following each story paragraph
    //     acc[(index - 1) / 2].imagePrompt = segment.trim();
    //   }
    //   return acc;
    // }, []);

    // console.log(jsonResponse);

    const story = [
      {
        id: "unique_id_0",
        story:
          "Once in a whimsical town named Sparkleton, there lived a group of playful animals. They loved dancing, singing, and exploring the nearby forest. But there was one thing they often forgot - brushing their teeth!",
        imagePrompt:
          "Illustration prompt: Create a vibrant scene showing the sparkling town of Sparkleton with cute animal characters dancing and playing together, with a toothbrush and toothpaste prominently displayed nearby, illustrating a morning routine.",
        image: "",
      },
      //   {
      //     id: "unique_id_1",
      //     story:
      //       "One sunny day, Dr. Quill, the wise old hedgehog, visited Sparkleton. He gathered all the animals and shared a magical secret - brushing teeth in the morning and night keeps them strong and bright, preventing cavities and toothaches!",
      //     imagePrompt:
      //       "Illustration prompt: Draw Dr. Quill surrounded by the animal characters, holding a giant toothbrush and explaining the benefits of brushing teeth. Show the animals looking curious and attentive, with colorful oral hygiene products around them.",
      //     image: "",
      //   },
      //   {
      //     id: "unique_id_2",
      //     story:
      //       "The animals listened intently, realizing the importance of good dental habits. From then on, they made a pact to brush their teeth every morning and night. They even turned it into a fun competition to see who could brush the longest!",
      //     imagePrompt:
      //       "Illustration prompt: Depict the animals brushing their teeth together in a cheerful and organized manner, with a timer showing how long they've been brushing. Show them laughing and enjoying the activity, creating a sense of unity and excitement.",
      //     image: "",
      //   },
      //   {
      //     id: "unique_id_3",
      //     story:
      //       "As time passed, the animals noticed their smiles getting brighter, and their visits to the dentist became much more enjoyable. Dr. Quill visited again and exclaimed how proud he was of their dedication to dental care.",
      //     imagePrompt:
      //       "Illustration prompt: Show the animals visiting the dentist happily, with big smiles on their faces and the dentist looking impressed with their healthy teeth. Include Dr. Quill observing proudly in the background, emphasizing the positive results of their brushing routine.",
      //     image: "",
      //   },
      //   {
      //     id: "unique_id_4",
      //     story:
      //       "From that day on, the animals of Sparkleton became known for their dazzling smiles and healthy teeth. They inspired neighboring towns to adopt the habit of brushing morning and night, spreading joy and good dental health throughout the land.",
      //     imagePrompt:
      //       "Illustration prompt: Create a grand scene depicting the animals of Sparkleton showcasing their radiant smiles to other townsfolk. Show a ripple effect of neighboring towns emulating their brushing routine, with everyone smiling brightly and thanking the animals.",
      //     image: "",
      //   },
    ];

    for (let i = 0; i < story.length; i++) {
      // Generating a prompt for an anime-style image based on the story content
      const prompt = story[i].imagePrompt;

      // Request to generate an image
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1, // Number of images to generate
        size: "1024x1024", // Resolution of the image
      });

      // Assuming the API returns a URL to the generated image in its response
      const imageUrl = imageResponse.data[0].url; // This path may vary depending on the actual API response structure

      // Update the current story object with the image URL
      story[i].image = imageUrl;

      console.log(imageResponse, imageResponse.data[0].url);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

story();
