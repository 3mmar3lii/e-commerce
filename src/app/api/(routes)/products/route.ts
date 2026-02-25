// this file is just for demo for now => api rouutes 
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const products = await res.json();
    return NextResponse.json({ message: "sucess", data: products });
  } catch (err) {
    console.log("Error ", err);
  }
}
