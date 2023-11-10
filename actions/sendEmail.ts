'use server'
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_KEY);

const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false
    }
    return true
}

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

   if (!validateString(senderEmail, 500)){
    return {error: 'Invalid Email'}
   }   
   if (!validateString(message, 5000)){
    return {error: 'Invalid message'}
   }   
  try {

      await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'waqasayaz.bscssef20@iba-suk.edu.pk',
          subject: 'Message from contact form',
          reply_to: senderEmail as string,
          text: message as string
        })
    } catch (error) {
        console.log(error)
    }
   }