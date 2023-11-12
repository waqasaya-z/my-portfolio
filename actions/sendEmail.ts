'use server'
import { getErrorMessage, validateString } from "@/utils/utils";
import { Resend } from "resend"
import ContactEmail from "@/email/contact-email";
import React from "react";

const resend = new Resend(process.env.RESEND_KEY);


export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

   if (!validateString(senderEmail, 500)){
    return {error: 'Invalid Email'}
   }   
   if (!validateString(message, 5000)){
    return {error: 'Invalid message'}
   }   
   let data;
  try {
     data = await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'waqasayaz.bscssef20@iba-suk.edu.pk',
          subject: 'Message from contact form',
          reply_to: senderEmail as string,
          react: React.createElement(ContactEmail, {
            message: message as string,  
            senderEmail:senderEmail as string
        })
        })
    } catch (error: unknown) {
       return {
        error: getErrorMessage(error)
       }
   }

   return {
    data
   }
}