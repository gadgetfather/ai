import { openai } from "./openai.js";
import { Document } from "langchain/document";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { CharacterTextSplitter } from "langchain/text_splitter";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { YoutubeLoader } from "langchain/document_loaders/web/youtube";

const question = process.argv[2];
const video = "https://youtu.be/fNQikhWqL1Q?si=1xV50RHLrbkGPIYl";

const createStore = (docs) =>
  MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings());

const docsFromYoutubeVideo = async (video) => {
  const loader = YoutubeLoader.createFromUrl(video, {
    language: "en",
    addVideoInfo: true,
  });
  return loader.loadAndSplit(
    new CharacterTextSplitter({
      separator: " ",
      chunkSize: 2500,
      chunkOverlap: 100,
    })
  );
};

const docsFromPDF = () => {
  const loader = new PDFLoader("./ps5.pdf");
  return loader.loadAndSplit(
    new CharacterTextSplitter({
      separator: ". ",
      chunkSize: 2500,
      chunkOverlap: 200,
    })
  );
};

const loadStore = async () => {
  const videDocs = await docsFromYoutubeVideo(video);
  const pdfDocs = await docsFromPDF();
  return createStore([...videDocs, ...pdfDocs]);
};

const query = async () => {
  const store = await loadStore();
  const results = await store.similaritySearch(question, 2);
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: `Answer the following question using the provided context. If you cannot answer the question with the context, don't lie and make up stuff. Just say you need more context. 
        Question: ${question} 
        Context: ${results.map((r) => r.pageContent).join("\n")}`,
      },
    ],
  });

  console.log(
    `Answer: ${response?.choices[0]?.message?.content} \n Sources: ${results
      ?.map((r) => r?.metadata?.source)
      .join(", ")}`
  );
};

query();
