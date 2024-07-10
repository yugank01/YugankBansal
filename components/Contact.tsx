"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const sendEmail = (params: Record<string, unknown>) => {
    const toastId = toast.loading("Sending your message, please wait...");

    toast.info(
      "Your filled up information is being directed to my (Yugank Bansal) email and I'll surely contact you.",
      {
        id: toastId,
      }
    );

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => {
        toast.success(
          "I have received your message, I will get back to you soon!",
          { id: toastId }
        );
      })
      .catch(() => {
        toast.error(
          "There was an error sending your message, please try again later!",
          { id: toastId }
        );
      });
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const templateParams: Record<string, unknown> = {
      to_name: "Yugank Bansal",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <Toaster richColors={true} />
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long.",
            },
          })}
          className="w-full text-sm md:text-base px-4 py-3 backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 shadow-lg outline-none text-white z-10"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
          className="w-full text-sm md:text-base px-4 py-3 backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 shadow-lg outline-none text-white z-10"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          placeholder="message"
          rows={3}
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters",
            },
          })}
          className="w-full text-sm md:text-base px-4 py-3 backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 shadow-lg outline-none text-white z-10"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          value="Cast your message!"
          className="px-10 py-4 rounded-2xl shadow-lg bg-black text-white backdrop-blur-sm outline-none cursor-pointer z-10"
          type="submit"
        />
      </motion.form>
    </div>
  );
};

export default Contact;
