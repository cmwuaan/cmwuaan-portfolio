'use client';
import React from 'react';
import { sendEmail } from './sendEmail';
import toast from 'react-hot-toast';
import { PiHandWavingFill } from 'react-icons/pi';

export default function ContactForm() {
  return (
    <form
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }

        toast.success('Email sent successfully!');
      }}
      className="flex flex-col gap-4 lg:w-[50%] w-full sm:w-[80%] md:w-[60%]"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium sm:text-base sm:mb-16 md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
        >
          Name
        </label>
        <input
          minLength={3}
          maxLength={150}
          required
          type="text"
          autoComplete="off"
          id="name"
          name="name"
          className="mt-1 w-full h-10 bg-white border border-white border-opacity-20 bg-opacity-10 rounded-md p-2 text-sm text-white"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium sm:text-base sm:mb-16 md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
        >
          Email
        </label>
        <input
          minLength={5}
          maxLength={150}
          required
          type="email"
          autoComplete="off"
          id="email"
          name="email"
          className="mt-1 w-full h-10 bg-white border border-white border-opacity-20 bg-opacity-10 rounded-md p-2 text-sm text-white"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-sm font-medium sm:text-base md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
        >
          Message
        </label>
        <textarea
          minLength={10}
          maxLength={500}
          required
          name="message"
          rows={4}
          className="mt-1 w-full bg-white border border-white border-opacity-20 bg-opacity-10 rounded-md p-2 text-sm text-white"
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="cursor-pointer text-sm font-medium sm:text-base md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 transition duration-300 ease-in-out hover:text-gray-300 underline">
          minhquanrbpk@gmail.com
        </p>
        <button
          type="submit"
          className="flex items-center gap-2 justify-center w-32 h-9 bg-white rounded-md text-black font-semibold p-1 text-sm transition duration-300 ease-in-out hover:bg-gray-200"
        >
          Hit me up
          <PiHandWavingFill />
        </button>
      </div>
    </form>
  );
}
