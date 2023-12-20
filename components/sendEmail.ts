'use server';
import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/app/emai/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  if (!validateString(name, 150)) {
    return {
      error: 'Invalid sender name',
    };
  }

  if (!validateString(senderEmail, 150)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: 'Invalid sender message',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form Cmwuaan Portfolio <onboarding@resend.dev>',
      to: 'minhquanrbpk@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        name: name as string,
        senderEmail: senderEmail as string,
        message: message as string,
      }),
      // <ContactFormEmail name={name} senderEmail={senderEmail} message={message}/>
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
