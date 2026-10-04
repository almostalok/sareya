import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.08em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E2925] disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "text-[11px] px-4 py-2.5 gap-2",
    md: "text-xs px-6 py-3.5 gap-2.5",
    lg: "text-xs sm:text-sm px-8 py-4 gap-3",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#8E2925] text-[#F7F1E7] hover:bg-[#641B1B] active:bg-[#4E1515] shadow-xs",
    secondary:
      "bg-[#EFE3D0] text-[#211B17] hover:bg-[#E4D3BC] border border-[#211B17]/10",
    outline:
      "border border-[#8E2925] text-[#8E2925] hover:bg-[#8E2925] hover:text-[#F7F1E7] bg-transparent",
    ghost:
      "text-[#211B17] hover:text-[#8E2925] hover:bg-[#EFE3D0]/60 bg-transparent",
    gold:
      "bg-[#D39A38] text-[#211B17] hover:bg-[#C28B2F] font-semibold shadow-xs",
    dark:
      "bg-[#211B17] text-[#F7F1E7] hover:bg-[#342A24] border border-[#211B17]",
  }[variant];

  const widthStyle = fullWidth ? "w-full" : "";

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
