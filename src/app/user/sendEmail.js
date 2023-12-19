// sendEmail.js
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const { REGION } = require("../../../config/dbconfig");
async function sendEmail(recipient, subject, message) {
  const ses = new SESClient({
    region: REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    },
  });

  const params = {
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: "meltatlonghari3+your_tools@gmail.com",
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await ses.send(command);

    console.log("Email sent successfully:", result.MessageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

module.exports = sendEmail;
