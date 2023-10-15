export function getDynamicKey() {
  const stripeKey = "STRIPE_SECRET_KEY";
  const key = process.env[stripeKey];

  const env = process.env;
  const key2 = env.STRIPE_SECRET_KEY;
  return key ? key : key2;
}
