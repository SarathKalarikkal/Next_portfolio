import nodemailer from "nodemailer"
import { configDotenv } from "dotenv";

configDotenv()

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

console.log("email-pass",email, pass);


export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: email,
        pass,
    }
})

export const mailOptions ={
    from : email,
    to:email
}