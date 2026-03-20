"use client";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea"
import Button from "@/components/Button"
import React, {useState} from "react";
import FormLabel from "@/components/FormLabel";
import {useForm} from "react-hook-form";

export default function Contact() {
  const {register, handleSubmit} = useForm();

  return (
    <div>
      <FormLabel label={"Name"}/>
      <Input {...register("name", {required: true})} placeholder={"John Doe"}/>
      <FormLabel label={"Email"}/>
      <Input {...register("email", {required: true})} placeholder={"email@example.com"}/>
      <FormLabel label={"Message"}/>
      <Textarea {...register("Message", {required: true})} placeholder={"Enter message"}/>
      <br/>
      <Button label={"Submit"}/>
    </div>
  );
}