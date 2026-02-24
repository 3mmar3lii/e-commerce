"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { GradientButton } from "@/shared/GradientButton";
import { Login } from "@/actions/AuthActions";
import NavigationLink from "@/shared/NavigationLink";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
console.log("clinet",email)
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#7C3AED]/8 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
            <span className="text-[#F5F5F5] text-xl">NovaMart</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-[#141416] border border-white/6 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-[#F5F5F5] text-2xl mb-2">Welcome back</h1>
            <p className="text-[#A1A1AA] text-sm">Sign in to your account</p>
          </div>

          <form action={Login} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                Email
              </label>
              <div className="flex items-center bg-[#1C1C1F] rounded-xl border border-white/6 focus-within:border-[#7C3AED]/50 transition-colors">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#71717A] ml-3"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent text-[#F5F5F5] text-sm px-3 py-3 outline-none placeholder:text-[#71717A]"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                Password
              </label>
              <div className="flex items-center bg-[#1C1C1F] rounded-xl border border-white/6 focus-within:border-[#7C3AED]/50 transition-colors">
                <Lock
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#71717A] ml-3"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent text-[#F5F5F5] text-sm px-3 py-3 outline-none placeholder:text-[#71717A]"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 text-[#71717A] hover:text-[#A1A1AA] transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff size={16} strokeWidth={1.5} />
                  ) : (
                    <Eye size={16} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#1C1C1F] border border-white/6 accent-[#7C3AED]"
                />
                <span className="text-[#A1A1AA] text-sm">Remember me</span>
              </label>
              <NavigationLink
              route="/forget-password"
              >
                <button
                  type="button"
                  className="text-[#A78BFA] text-sm hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </NavigationLink>
            </div>

            <GradientButton type="submit" fullWidth size="lg">
              Sign In
            </GradientButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/6" />
            <span className="text-[#71717A] text-xs">or continue with</span>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((provider) => (
              <button
                key={provider}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/6 text-[#A1A1AA] text-sm hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer"
              >
                {provider}
              </button>
            ))}
          </div>

          {/* Sign up link */}
          <p className="text-center mt-6 text-[#71717A] text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#A78BFA] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
