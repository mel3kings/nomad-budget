// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
// https://nextjs.org/docs/getting-started/project-structure

import { GenerateText } from "./openai";

export default async function handler(req, res) {
  const response = await GenerateText("hello how are you");
  res.status(200).json({ message: `${response}` });
}
