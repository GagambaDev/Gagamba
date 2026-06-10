import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Contact } from "@/types/forms/contact";

export async function POST(request: Request) {
  const contact = (await request.json()) as Contact;

  if (!contact.name || !contact.email || !contact.message)
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });

  const { error } = await supabase.from("contact_submissions").insert({
    name: contact.name,
    email: contact.email,
    message: contact.message,
  });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
