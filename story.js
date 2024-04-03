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

    const story = `Once upon a time, there was a boy named Tom who was determined to learn how to ride a bike. He had watched his friends zooming around the park on their bikes, and he couldn't wait to join them. Tom's dad had promised to teach him, but Tom knew it wouldn't be easy. He had tried before but always ended up falling off and scraping his knees. However, Tom was determined not to give up.

    Every afternoon after school, Tom would head to the park with his dad. He would sit on his bike and push off, wobbling and struggling to find his balance. But no matter how many times he fell, Tom would get back up and try again. His dad would cheer him on, reminding him that learning to ride a bike takes time and practice. Tom's determination only grew stronger with each fall.

    As the days passed, Tom's persistence began to pay off. He started to feel more confident on the bike, mastering the art of steering and pedaling. With each practice session, he could feel himself improving. Finally, one sunny afternoon, Tom pedaled down the park path without wobbling, his grin stretching from ear to ear. He had done it! He could ride a bike!

    Tom's friends cheered as he rode past them, feeling a sense of accomplishment that made all the falls and struggles worth it. From that day on, Tom rode his bike every chance he got, exploring the park and feeling the wind in his hair. He had learned that with persistence and hard work, anything was possible. And he was proud to have never given up on his dream of riding a bike.`;

    const paragraphs = story.split("\n\n");

    for (let i = 0; i < paragraphs.length; i++) {
      // Generating a prompt for an anime-style image based on the story content
      const imagePrompt = `
        story context is delimited by ###
    
        ###${story}###
    
        Generate an origami style image for the text delimited by """.  Make sure to keep the image related only to the main character which is tom.
    
        """${paragraphs[i]}"""
    
        Remember this is for the kids story. Just generate image and don't include any text in it. DO NOT INCLUDE TEXT.`;

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
