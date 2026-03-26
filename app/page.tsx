"use client";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea"
import Button from "@/components/Button"
import React from "react";
import FormLabel from "@/components/FormLabel";
import {useForm} from "react-hook-form";

export default function Contact() {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{backgroundColor: '#01277C'}} className="min-h-screen flex items-center justify-center px-4">      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-4">
        <h1 className="text-white text-2xl font-bold mb-2">Contact Us</h1>
        <FormLabel label={"Name"}/>
        <Input {...register("name")} placeholder={"John Doe"}/>
        <FormLabel label={"Email"}/>
        <Input {...register("email")} placeholder={"email@example.com"}/>
        <FormLabel label={"Message"}/>
        <Textarea {...register("message")} placeholder={"Enter message"}/>
        <Button label={"Submit"}/>
      </form>
    </div>
  );
}