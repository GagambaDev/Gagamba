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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel label={"Name"}/>
      <Input {...register("name", {required: true})} placeholder={"John Doe"}/>
      <FormLabel label={"Email"}/>
      <Input {...register("email", {required: true})} placeholder={"email@example.com"}/>
      <FormLabel label={"Message"}/>
      <Textarea {...register("message", {required: true})} placeholder={"Enter message"}/>
      <br/>
      <SubmitButton label={"Submit"}/>
    </form>
  );
}