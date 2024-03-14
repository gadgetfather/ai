import OpenAI from "openai";

import { openai } from "./openai.js";
import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
export async function jsoon(content) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      {
        role: "user",
        content: `
        Convert the following content into JSON format. JSON format should be in the following structure: 
        {
          machineName: "Name of the machine on which the content is based",
          modules:[
          {
          id:"module index",
          moduleName: "Name of the module, dont add Training module 1 or 2 at start",
          estimatedTime: "time in minutes to complete the module",
          totalTopics: "total number of topics in the module",
          shortModuleDescription: "short description of the module",
          ModuleContent: [
            {
              id:"ModuleContent index",
              title: "Title of the topic",
              titleDescription: "One liner description of the topic",
              image: "image url related to the topic",
              content: "This is the content of the module broken down into smaller parts"
            }
          ]
        }
      }
    ]
        content: ${content}`,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });

  //  assessment: {
  //    questions: [
  //      {
  //        id: "questions index",
  //        question: "Question",
  //        options: [
  //          { id: "unique id", option: "Option 1" },
  //          { id: "unique id", option: "Option 2" },
  //          { id: "unique id", option: "Option 3" },
  //          { id: "unique id", option: "Option 4" },
  //        ],
  //        answer: "Correct option id",
  //      },
  //    ];
  //  }

  console.log(completion.choices[0].message.content);
  const docRef = await addDoc(collection(db, "modules"), {
    createdAt: Date.now(),
    ...JSON.parse(completion.choices[0].message.content),
  });
  console.log("Document written with ID: ", docRef.id);
}
