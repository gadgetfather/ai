import { openai } from "./openai.js";
import fs from "fs";
import OpenAI from "openai";

async function main() {
  const file = await openai.files.create({
    file: fs.createReadStream("./ps5.pdf"),
    purpose: "assistants",
  });
  const assistant = await openai.beta.assistants.create({
    instructions:
      "You are a customer support chatbot. Use your knowledge base to best respond to customer queries.",
    model: "gpt-4-turbo-preview",
    tools: [{ type: "retrieval" }],
    file_ids: [file.id],
  });
  console.log(assistant);

  console.log(file);
}

main();
