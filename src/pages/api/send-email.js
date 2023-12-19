import { EmailTemplate } from "./emailTemplate";
import { Resend } from "resend";

export default async (req, res) => {
  const resend = new Resend(process.env["NEXT_PUBLIC_RESEND_API_KEY"]);
  console.log("sending email");
  try {
    const data = await resend.emails.send({
      from: "Melchor Tatlonghari <founder@make-time.net>",
      to: ["meltatlonghari3@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John", body: JSON.stringify(req.body) }),
    });

    console.log("done sending email");
    res.status(200).json(data);
  } catch (error) {
    console.log("error sending email", error);
    res.status(400).json(error);
  }
};
