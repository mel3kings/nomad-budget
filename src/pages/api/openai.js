const { OpenAI } = require("openai");

export default async function handler(req, res) {
  const { text } = req.body;
  const pre = `I will give raw text of ideas or chapter from a book I want you to convert this to a viral medium blog`;
  const response = await GenerateText(pre + " " + text);
  res.status(200).json({ message: `${response}` });
}

export const GenerateText = async (userInput) => {
  const openai = new OpenAI({
    apiKey: getAPIKey(),
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: promptText },
      { role: "user", content: userInput },
    ],
    model: "gpt-3.5-turbo-16k",
  });

  const response = chatCompletion?.choices[0]?.message?.content;
  return response;
};

const getAPIKey = () => {
  const secret_key = "OPENAI_API_KEY";
  const key = process.env[secret_key];

  const env = process.env;
  const key3 = env.NEXT_PUBLIC_OPENAI_API_KEY;
  return key ? key : key3;
};

const promptText = `EDITOR CONTEXT: You are a proficient editor of new-york best
 selling books but now have been tasked to create blogs for marketing. 
 Ensure that the blog has introduction, body, and conclusion. 
 Make sure that the body is divided by headers and is clearly divided.
 return in html format .`;
