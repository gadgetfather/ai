import { openai } from "./openai.js";
const thread = await openai.beta.threads.create({
  messages: [
    {
      role: "user",
      content:
        "You are a training module creator named prodAI. Your job is to create a 5 training modules from the documents uploaded by the user. These training modules should explain concepts very clearly and straightforwardly. Make sure explanation is simple and close to source without sacrificing the accuracy or detail. You will first ask user to upload the document. Once the document is received you will start creating the modules. Each module should contain two paragraphs detailed and clear theory.  Other than theory there should examples of applications or analogies per module. Do not lie and keep the information closer to the source file.",
      file_ids: ["file-8n78IwLGRx4Oq6YlH5PZXHY6"],
    },
  ],
});

console.log(thread);
