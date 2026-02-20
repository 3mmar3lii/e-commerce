import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outlined" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export function GradientButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  icon,
  fullWidth = false,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5",
    lg: "px-7 py-3.5",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] active:scale-[0.98]",
    outlined:
      "border border-[#7C3AED]/50 text-[#A78BFA] hover:bg-[#7C3AED]/10 hover:border-[#7C3AED] active:scale-[0.98]",
    ghost:
      "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/5 active:scale-[0.98]",
    danger:
      "border border-[#EF4444]/50 text-[#EF4444] hover:bg-[#EF4444]/10 hover:border-[#EF4444] active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed !shadow-none" : "cursor-pointer"}
        ${className}
      `}
    >
      {icon}
      {children}
    </button>
  );
}
