// import the required dependencies
import dotenv from "dotenv";
import { openai } from "./openai.js";
import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askQuestion(question) {
  return new Promise((resolve, reject) => {
    readline.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    const assistant = await openai.beta.assistants.create({
      name: "ProdAI",
      instructions:
        "You are a training module creator named prodAI. Your job is to create a 5 training modules from the documents uploaded by the user. These training modules should explain concepts very clearly and straightforwardly. Make sure explanation is simple and close to source without sacrificing the accuracy or detail. Once the document is received you will start creating the modules. Each module should contain two paragraphs detailed and clear theory. Other than theory there should examples of applications or analogies per module. You have to give 5 modules.",
      tools: [{ type: "retrieval" }],
      model: "gpt-3.5-turbo",
      file_ids: ["file-8n78IwLGRx4Oq6YlH5PZXHY6"],
    });

    // Log the first greeting
    console.log("\nProdAI Booted\n");

    // Create a thread
    const thread = await openai.beta.threads.create();

    // Use keepAsking as state for keep asking questions
    let keepAsking = true;

    while (keepAsking) {
      const userQuestion = await askQuestion("\nHow can I help you today?\n");

      // Pass in the user question into the existing thread
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: userQuestion,
      });

      // Use runs to wait for the assistant response and then retrieve it
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: assistant.id,
      });

      let runStatus = await openai.beta.threads.runs.retrieve(
        thread.id,
        run.id
      );

      // Polling mechanism to see if runStatus is completed
      // This should be made more robust.
      while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      }

      // Get the last assistant message from the messages array
      const messages = await openai.beta.threads.messages.list(thread.id);

      // Find the last message for the current run
      const lastMessageForRun = messages.data
        .filter(
          (message) => message.run_id === run.id && message.role === "assistant"
        )
        .pop();

      // If an assistant message is found, console.log() it
      if (lastMessageForRun) {
        console.log(`${lastMessageForRun.content[0].text.value} \n`);
      }

      // Then ask if the user wants to ask another question and update keepAsking state
      const continueAsking = await askQuestion(
        "Do you want to ask another question? (y/n) "
      );
      keepAsking = continueAsking.toLowerCase() === "y";

      // If the keepAsking state is falsy show an ending message
      if (!keepAsking) {
        console.log("Alrighty then, I hope you learned something!\n");
      }
    }

    // close the readline
    readline.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
