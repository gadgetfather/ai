import { openai } from "./openai.js";

async function main() {
  const list = await openai.files.list();

  for await (const file of list) {
    console.log(file);
  }
}

main();
