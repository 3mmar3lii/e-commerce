"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Check, X } from "lucide-react";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import { PRODUCT_IMAGES } from "@/mockdata";
import Link from "next/link";
import { GradientButton } from "@/shared/GradientButton";
import { SignUp } from "@/actions/AuthActions";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;


  return (
    <div className="h-screen bg-[#0A0A0B] flex  overflow-hidden">
      {/* Left hero panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <ImageWithFallback
          width={1920}
          height={1080}
          src={PRODUCT_IMAGES.hero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#7C3AED]/60 to-[#6D28D9]/40" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B]/80 via-transparent to-transparent" />
        {/* Brand & tagline */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
            <span className="text-white text-xl">NovaMart</span>
          </div>
        </div>
        <div className="absolute bottom-12 left-8 right-8">
          <h2 className="text-white text-3xl mb-3" style={{ lineHeight: 1.2 }}>
            Join the future of
            <br />
            premium shopping
          </h2>
          <p className="text-white/70 text-sm max-w-sm">
            Create your account and discover a world of curated products
            designed for the modern lifestyle.
          </p>
        </div>
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex justify-center mb-8 lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#7C3AED] to-[#6D28D9] flex items-center justify-center">
                <span className="text-white">N</span>
              </div>
              <span className="text-[#F5F5F5] text-xl">NovaMart</span>
            </Link>
          </div>

          {/* Card */}
          <div className="bg-[#141416] border border-white/6 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-[#F5F5F5] text-2xl mb-2">Create Account</h1>
              <p className="text-[#A1A1AA] text-sm">
                Start your shopping journey
              </p>
            </div>

            <form action={SignUp} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                  Full Name
                </label>
                <div className="flex items-center bg-[#1C1C1F] rounded-xl border border-white/6 focus-within:border-[#7C3AED]/50 transition-colors">
                  <User
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#71717A] ml-3"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="flex-1 bg-transparent text-[#F5F5F5] text-sm px-3 py-3 outline-none placeholder:text-[#71717A]"
                    required
                    maxLength={100}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                  Email Address
                </label>
                <div className="flex items-center bg-[#1C1C1F] rounded-xl border border-white/6 focus-within:border-[#7C3AED]/50 transition-colors">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#71717A] ml-3"
                  />
                  <input
                    type="email"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
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

              {/* Confirm Password */}
              <div>
                <label className="text-[#A1A1AA] text-sm mb-1.5 block">
                  Confirm Password
                </label>
                <div
                  className={`flex items-center bg-[#1C1C1F] rounded-xl border transition-colors ${
                    passwordsMatch
                      ? "border-[#10B981]/50"
                      : passwordsMismatch
                        ? "border-[#EF4444]/50"
                        : "border-white/6 focus-within:border-[#7C3AED]/50"
                  }`}
                >
                  <Lock
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#71717A] ml-3"
                  />
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="flex-1 bg-transparent text-[#F5F5F5] text-sm px-3 py-3 outline-none placeholder:text-[#71717A]"
                    required
                  />
                  <div className="flex items-center gap-1 pr-3">
                    {passwordsMatch && (
                      <Check size={16} className="text-[#10B981]" />
                    )}
                    {passwordsMismatch && (
                      <X size={16} className="text-[#EF4444]" />
                    )}
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="text-[#71717A] hover:text-[#A1A1AA] transition-colors cursor-pointer"
                    >
                      {showConfirm ? (
                        <EyeOff size={16} strokeWidth={1.5} />
                      ) : (
                        <Eye size={16} strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <GradientButton
                type="submit"
                fullWidth
                size="lg"
                disabled={
                  !name || !email || password.length < 8 || !passwordsMatch
                }
              >
                Create Account
              </GradientButton>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/6" />
              <span className="text-[#71717A] text-xs">or</span>
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

            <p className="text-center mt-6 text-[#71717A] text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#A78BFA] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
