import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  badge?: number;
  size?: "sm" | "md" | "lg";
}

export function IconButton({
  children,
  label,
  badge,
  size = "md",
  className = "",
  ...props
}: IconButtonProps) {
  const sizeStyles = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <button
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center rounded-full text-[#211B17] hover:text-[#8E2925] hover:bg-[#EFE3D0]/60 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E2925] ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
      {typeof badge === "number" && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#8E2925] text-[#F7F1E7] text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  );
}
