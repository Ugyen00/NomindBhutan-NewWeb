import {NextResponse} from "next/server";
import { transporter,mailOptions } from "../../../config/nodemailer"

// import sgMail from '@sendgrid/mail';
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request){
    const data = await request.json()
    if(!data.name || !data.email || !data.bio){
        return NextResponse.status(400).json({message:"Bad Request"})
    }

    try {
        // sendGrid
        // const msg = {
        //     to: "nomindbhutan@gmail.com",
        //     from: "nomindbhutan@gmail.com", 
        //     subject: 'Website Client Message',
        //     text: `${data}`,
        //     html: `<h1>Client Info</h1><p>${data.name},${data.email},${data.bio}</p>`,
        // }
        // sgMail.send(msg);

        //nodemailer 
        await transporter.sendMail({
            ...mailOptions,
            subject:"Client Contact",
            text: "Client Mail",
            html:`<h1>Client Info</h1><p>${data.name},${data.email},${data.bio}</p>`
        })

        return NextResponse.json({message:"Mail Send Successfully"});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:error.message})
    }
}
