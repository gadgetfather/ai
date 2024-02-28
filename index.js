import { openai } from "./openai.js";
const results = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    {
      role: "user",
      content: "hi, can you tell me a joke?",
    },
  ],
});

console.log(results.choices);
