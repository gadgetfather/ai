import { openai } from "./openai.js";

async function story() {
  try {
    const prompt =
      "story regarding why it is important to brush in morning and night";
    const ageGroup = "5-10 years";
    const message = "Importance of brushing teeth in the morning and night";

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a story creator for kids and a prompt generator for the same story. After each story paragraph, generate a detailed description suitable for creating an independent anime-style illustration. Use the term 'Illustration:' to introduce these descriptions. The descriptions should be comprehensive, including specific visual details like characters, actions, settings, and emotions, without indicating it's a prompt or requiring prior context. The illustrations are intended to complement the story visually, enhancing the narrative for children.",
        },
        {
          role: "user",
          content: `Based on the prompt: "${prompt}", for the age group of ${ageGroup}, that teaches the message "${message}", create a story structured into 5 paragraphs, each containing about 30 words. Immediately follow each paragraph with a detailed visual description introduced by the term 'Illustration:'. Each description should be rich in visual details, specifying elements such as character appearances, actions, expressions, and setting nuances to ensure the illustrations can be understood and enjoyed on their own. Make sure the story is engaging, age-appropriate, and clearly conveys the intended message.`,
        },
      ],
      model: "gpt-3.5-turbo-0125",
    });

    console.log(completion.choices[0].message.content);

    const storyText = `Once in the magical land of Sparkleton, where every smile sparkled like the sun, lived a little sprite named Twinkle. Twinkle loved sweets and forgot to brush her teeth regularly, much to her parents' dismay.

    Illustration: Twinkle, a vibrant sprite with pastel pink wings and a mischievous grin, surrounded by colorful candies in her whimsical room. Her toothbrush lay forgotten as her pet fairy fluttered nearby in concern.

    One day, the Sugarbugs invaded Sparkleton, causing chaos and spreading cavities. Twinkle realized her mistake and sought the help of the wise Tooth Fairy, who explained the importance of brushing to keep the Sugarbugs away and mouths healthy.

    Illustration: The Tooth Fairy, a majestic figure with golden wings and a shimmering gown, standing in a crystal-clear cave filled with glowing teeth. She gently points to a toothbrush and a tube of sparkling toothpaste, her expression kind but firm.

    Determined to save her home, Twinkle vowed to brush her teeth every morning and night. With the Tooth Fairy's guidance, she learned proper brushing techniques and saw her smile grow brighter, driving the Sugarbugs away and restoring Sparkleton's beauty.

    Illustration: Twinkle, now diligent and focused, brushing her tiny teeth with precision in front of a magic mirror that reflects a gleaming smile. The Tooth Fairy admires her progress, a proud gleam in her eyes, as the once-glum faces of Sparkleton beam with joy.

    Through Twinkle's journey, the sprites of Sparkleton understood the importance of oral care, adopting healthy habits and sharing the lesson far and wide. Twinkle's once-neglected toothbrush became a symbol of commitment and the key to preserving their enchanting land's happiness forevermore.

    Illustration: A bustling scene in Sparkleton, with sprites of all colors happily brushing their teeth in harmony under a rainbow sky. Twinkle stands at the forefront, holding her toothbrush like a hero's sword, surrounded by grateful smiles and a serene sense of unity.`;

    const segments = storyText.split("\n\n");
    const formattedJson = [];

    segments.forEach((segment, index) => {
      if (segment.startsWith("Illustration: ")) {
        const previousStoryIndex = formattedJson.length - 1;
        formattedJson[previousStoryIndex].storyIllustration = segment.replace(
          "Illustration: ",
          ""
        );
      } else {
        formattedJson.push({
          id: `unique_id_${formattedJson.length}`,
          story: segment,
          storyIllustration: "", // This will be filled by the next iteration if it's an illustration
          imageUrl: "", // Placeholder for the image URL, to be populated later
        });
      }
    });

    console.log(formattedJson);

    const story = [
      {
        id: "unique_id_0",
        story:
          "Once in the magical land of Sparkleton, where every smile sparkled like the sun, lived a little sprite named Twinkle. Twinkle loved sweets and forgot to brush her teeth regularly, much to her parents' dismay.",
        storyIllustration:
          "Twinkle, a vibrant sprite with pastel pink wings and a mischievous grin, surrounded by colorful candies in her whimsical room. Her toothbrush lay forgotten as her pet fairy fluttered nearby in concern.",
        imageUrl: "",
      },
      {
        id: "unique_id_1",
        story:
          "One day, the Sugarbugs invaded Sparkleton, causing chaos and spreading cavities. Twinkle realized her mistake and sought the help of the wise Tooth Fairy, who explained the importance of brushing to keep the Sugarbugs away and mouths healthy.",
        storyIllustration:
          "The Tooth Fairy, a majestic figure with golden wings and a shimmering gown, standing in a crystal-clear cave filled with glowing teeth. She gently points to a toothbrush and a tube of sparkling toothpaste, her expression kind but firm.",
        imageUrl: "",
      },
      {
        id: "unique_id_2",
        story:
          "Determined to save her home, Twinkle vowed to brush her teeth every morning and night. With the Tooth Fairy's guidance, she learned proper brushing techniques and saw her smile grow brighter, driving the Sugarbugs away and restoring Sparkleton's beauty.",
        storyIllustration:
          "Twinkle, now diligent and focused, brushing her tiny teeth with precision in front of a magic mirror that reflects a gleaming smile. The Tooth Fairy admires her progress, a proud gleam in her eyes, as the once-glum faces of Sparkleton beam with joy.",
        imageUrl: "",
      },
      {
        id: "unique_id_3",
        story:
          "Through Twinkle's journey, the sprites of Sparkleton understood the importance of oral care, adopting healthy habits and sharing the lesson far and wide. Twinkle's once-neglected toothbrush became a symbol of commitment and the key to preserving their enchanting land's happiness forevermore.",
        storyIllustration:
          "A bustling scene in Sparkleton, with sprites of all colors happily brushing their teeth in harmony under a rainbow sky. Twinkle stands at the forefront, holding her toothbrush like a hero's sword, surrounded by grateful smiles and a serene sense of unity.",
        imageUrl: "",
      },
    ];

    // for (let i = 0; i < story.length; i++) {
    //   // Generating a prompt for an anime-style image based on the story content
    //   const prompt = story[i].storyIllustration;

    //   // Request to generate an image
    //   const imageResponse = await openai.images.generate({
    //     model: "dall-e-3",
    //     prompt: prompt,
    //     n: 1, // Number of images to generate
    //     size: "1024x1024", // Resolution of the image
    //   });

    //   // Assuming the API returns a URL to the generated image in its response
    //   const imageUrl = imageResponse.data[0].url; // This path may vary depending on the actual API response structure

    //   // Update the current story object with the image URL
    //   story[i].imageUrl = imageUrl;

    //   console.log(imageResponse, imageResponse.data[0].url);
    // }
  } catch (error) {
    console.error("Error:", error);
  }
}

story();
