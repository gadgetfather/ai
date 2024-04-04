import { openai } from "./openai.js";

async function story() {
  try {
    //     const prompt =
    //       "Write a story about boy name tom who is learning to ride a bike.";
    //     const ageGroup = "5-10 years";
    //     const message = "The story should convey the message of persistence.";
    //     const gender = "boy";
    //     const mainCharacter = "Tom";

    //     const completion = await openai.chat.completions.create({
    //       messages: [
    //         {
    //           role: "system",
    //           content: "You are a story creator for kids",
    //         },
    //         {
    //           role: "user",
    //           content: `${prompt}
    // You have to write a story for kids age group between ${ageGroup} old. The story should be 5 pages about 250 words. its main character is ${gender}. ${message} Generate story in 5 paragraphs.`,
    //         },
    //       ],
    //       model: "gpt-3.5-turbo-0125",
    //     });

    //     console.log(completion.choices[0].message.content);

    const story = `Once upon a time, in a small, bustling village nestled at the foot of vast, whispering mountains, lived a young boy named Jack. With hair as wild as the wind and eyes sparkling with untamed curiosity, Jack dreamed of exploring the towering peaks that kissed the skies above his home. One bright morning, with the sun casting a golden glow over the world, Jack decided that today was the day he would embark on his grand adventure.
    ###
    With a backpack slung over his shoulders, filled with essentials and a heart brimming with excitement, Jack waved goodbye to his village. He began his ascent, the path winding and steep, flanked by trees that seemed to cheer him on with every whispering breeze. But as Jack climbed higher, the friendly path transformed. Rocks and roots conspired to trip him, and the mountain's breath grew cold and biting.
    ###
    Undeterred, Jack pressed on, his legs aching but his spirit undimmed. He remembered stories of adventurers and explorers who faced challenges with courage and persistence. With each step, he whispered to himself, "Just one more step, Jack. Just one more." And so, with determination as his companion, he overcame slippery slopes and treacherous trails.
    ###
    As the sun began to dip below the horizon, painting the sky with shades of orange and pink, Jack reached the summit. The view that greeted him was beyond words—valleys dipped in gold, rivers twinkling like silver snakes, and the endless sky stretching into infinity. In that moment, Jack understood the true beauty of persistence, the joy of conquering not just the mountain, but the doubts within.
    ###
    With the stars beginning to twinkle in the sky, like diamonds scattered across velvet, Jack made his way back home, his heart filled with a new kind of richness. He realized that every obstacle faced and every challenge overcome was a step towards achieving his dreams. And in sharing his tale with others, Jack inspired a new generation to explore, persist, and discover the wonders of the world with courage and an unyielding spirit.`;

    const paragraphs = story.split("###");
    console.log(paragraphs.length);

    for (let i = 0; i < 1; i++) {
      // Generating a prompt for an anime-style image based on the story content
      const imagePrompt = `
      
    
        Create an image in a vibrant, layered paper cut-out style. The scene should be composed of brightly colored paper elements with clear, bold outlines. Characters or objects in the scene will have a charming, simplified look with exaggerated features and a slight three-dimensional effect to give the impression of depth. The background should feature elements with overlapping layers to enhance the paper art aesthetic. Each component, whether a character, item, or part of the scenery, should look like it is crafted from pieces of colored paper, assembled with care to bring the scene to life. 

Here is the description delimited in """
    
        """${paragraphs[i]}"""
    
        Here is seed text for the image generation: 52231
       `;

      // Request to generate an image
      const imageResponse = await openai.images.generate({
        model: "dall-e-3",
        prompt: imagePrompt,
        n: 1, // Number of images to generate
        size: "1024x1024", // Resolution of the image
      });

      // Assuming the API returns a URL to the generated image in its response
      const imageUrl = imageResponse.data[0].url; // This path may vary depending on the actual API response structure

      // Update the current story object with the image URL
      //   story[i].imageUrl = imageUrl;

      console.log(imageResponse, imageResponse.data[0].url);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

story();
