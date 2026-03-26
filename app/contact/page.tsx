"use client";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea"
import SubmitButton from "@/components/SubmitButton"
import React from "react";
import FormLabel from "@/components/FormLabel";
import {useForm} from "react-hook-form";
import {Quote} from "@/types/forms/quote";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const {register, handleSubmit} = useForm<Quote>();

  const onSubmit = async (quote: Quote) => {
      const { error } = await supabase
        .from("quote")
        .insert({
          name: quote.name,
          email: quote.email,
          message: quote.message,
        });

      if (error) {
        console.error(error);
      }

  };


  return (
    <div style={{backgroundColor: '#172554'}} className="min-h-screen flex items-center justify-center px-4">      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-4">
        <h1 className="text-white text-2xl font-bold mb-2">Contact Us</h1>
        <FormLabel label={"Name"}/>
        <Input {...register("name")} placeholder={"John Doe"}/>
        <FormLabel label={"Email"}/>
        <Input {...register("email")} placeholder={"email@example.com"}/>
        <FormLabel label={"Message"}/>
        <Textarea {...register("message")} placeholder={"Enter message"}/>
        <SubmitButton label={"Submit"}/>
      </form>
    </div>
  );
}