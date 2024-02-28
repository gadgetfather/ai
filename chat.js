import { openai } from "./openai.js";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const newMessage = async (history, message) => {
  const results = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [...history, message],
  });

  return results.choices[0].message;
};

const formatMessage = (userInput) => {
  return {
    role: "user",
    content: userInput,
  };
};

const chat = () => {
  const history = [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ];
  const start = () => {
    rl.question("You: ", async (userInput) => {
      if (userInput === "exit") {
        rl.close();
        return;
      }
      const messsage = formatMessage(userInput);
      const response = await newMessage(history, messsage);

      history.push(messsage, response);
      console.log("\n\nAI: ", response.content);
      start();
    });
  };
  start();
};

console.log('Chat with the AI. Type "exit" to quit.');
chat();
