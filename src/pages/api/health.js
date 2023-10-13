export default async function handler(req, res) {
  const secret_key = "OPENAI_API_KEY";
  const key = process.env[secret_key];

  const varName = "NEXT_PUBLIC_OPENAI_API_KEY";
  const key2 = process.env[varName];

  const env = process.env;
  const key3 = env.NEXT_PUBLIC_OPENAI_API_KEY;

  res.status(200).json({
    message: `Service is up ${key ? key.substring(0, 5) : "no key set"} 
    ${key2 ? key2.substring(0, 5) : "no key2 set"}
    ${key3 ? key3.substring(0, 5) : "no key3 set"}`,
  });
}
