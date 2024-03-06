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
          modules:[
          {
          id:"",
          moduleName: "Name of the module",
          shortModuleDescription: "short description of the module",
          ModuleContent: [
            {
              id:"unique id",
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
  console.log(completion.choices[0].message.content);
  const docRef = await addDoc(
    collection(db, "modules"),
    JSON.parse(completion.choices[0].message.content)
  );
  console.log("Document written with ID: ", docRef.id);
}
