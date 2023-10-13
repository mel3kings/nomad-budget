export default async function handler(req, res) {
  const key = process.env.OPENAI_API_KEY;
  res.status(200).json({ message: `Service is up ${key ? key.substring(0, 5) : "no key set"}` });
}
