import { openai } from "./openai.js";
import fs from "fs";

// Upload a file with an "assistants" purpose
const file = await openai.files.create({
  file: fs.createReadStream("v60-2.pdf"),
  purpose: "assistants",
});
