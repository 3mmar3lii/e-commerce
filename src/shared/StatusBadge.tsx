interface StatusBadgeProps {
  status: string;
  variant?: "order" | "payment" | "product" | "role";
}

const colorMap: Record<string, Record<string, string>> = {
  order: {
    PENDING: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/20",
    PROCESSING: "bg-[#3B82F6]/15 text-[#3B82F6] border-[#3B82F6]/20",
    DELIVERED: "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/20",
    CANCELLED: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/20",
  },
  payment: {
    pending: "bg-[#71717A]/15 text-[#A1A1AA] border-[#71717A]/20",
    paid: "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/20",
    failed: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/20",
    refunded: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/20",
  },
  product: {
    active: "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/20",
    draft: "bg-[#71717A]/15 text-[#A1A1AA] border-[#71717A]/20",
    archived: "bg-[#EF4444]/15 text-[#EF4444] border-[#EF4444]/20",
  },
  role: {
    customer: "bg-[#7C3AED]/15 text-[#A78BFA] border-[#7C3AED]/20",
    seller: "bg-[#06B6D4]/15 text-[#22D3EE] border-[#06B6D4]/20",
    admin: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/20",
  },
};

export function StatusBadge({ status, variant = "order" }: StatusBadgeProps) {
  const colors =
    colorMap[variant]?.[status] ||
    "bg-[#71717A]/15 text-[#A1A1AA] border-[#71717A]/20";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full border ${colors}`}
      style={{ fontSize: "0.75rem" }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
    </span>
  );
}
