import { mailOptions, transporter } from '@/config/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'


// Define a type for the contact form data
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define a proper type for CONTACT_MESSAGE_FIELDS
const CONTACT_MESSAGE_FIELDS: Record<keyof ContactFormData, string> = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
};
// Function to generate email content
const generateEmailContent = (data: ContactFormData) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => str + `${CONTACT_MESSAGE_FIELDS[key as keyof ContactFormData]}: \n${val} \n \n`,
    ''
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      str +
      `<h1 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key as keyof ContactFormData]}</h1>
      <p class="form-answer" align="left">${val}</p>`,
    ''
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html>
    <head>
      <title>New Contact Message</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style>
        a, body, table, td {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        table {
          border-collapse: collapse !important;
        }
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
        @media screen and (max-width: 525px) {
          .wrapper {
            width: 100% !important;
            max-width: 100% !important;
          }
          .responsive-table {
            width: 100% !important;
          }
          .padding {
            padding: 10px 5% 15px 5% !important;
          }
          .section-padding {
            padding: 0 15px 50px 15px !important;
          }
        }
        .form-container {
          margin-bottom: 24px;
          padding: 20px;
          border: 1px dashed #ccc;
        }
        .form-heading {
          color: #2a2a2a;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 400;
          text-align: left;
          line-height: 20px;
          font-size: 18px;
          margin: 0 0 8px;
          padding: 0;
        }
        .form-answer {
          color: #2a2a2a;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: 300;
          text-align: left;
          line-height: 20px;
          font-size: 16px;
          margin: 0 0 24px;
          padding: 0;
        }
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
      </style>
    </head>
    <body style="margin:0!important;padding:0!important;background:#fff">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td bgcolor="#ffffff" align="center" style="padding:10px 15px 30px 15px" class="section-padding">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px" class="responsive-table">
              <tr>
                <td>
                  <h2>New Contact Message</h2>
                  <div class="form-container">${htmlData}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`,
  };
};


// API handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, subject } = req.body as ContactFormData;

    if (!name || !email || !message || !subject) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent({ name, email, message, subject }),
        subject: subject,
      });

      return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: 'An unknown error occurred' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}