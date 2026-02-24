"use server";

import { IResponseLogin } from "@/types/Login.type";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Login(formData: FormData) {
  console.log("form data", formData);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    console.log("email", email);
    console.log("password", password);
    throw new Error("Missing credentials");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Request failed");
  }

  const data: IResponseLogin = await res.json();

  if (!data.success) {
    throw new Error("Invalid credentials");
  }
  const cookieStore = await cookies();

  cookieStore.set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  redirect("/");
}

export async function SignUp(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("passwordname");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      // throw new error
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/sign-up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
        cache: "no-store",
      },
    );
    if (!response.ok) {
      // error
    }
    const data = response.json();
    return data;
  } catch (err) {}
}
