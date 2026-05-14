export default function Button({ children, variant = "primary", disabled = false, loading = false, onClick, type = "button", className = "", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none select-none px-4 py-2 text-sm";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 active:scale-95",
    secondary: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50 disabled:opacity-40 active:scale-95",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 active:scale-95",
    ghost: "bg-transparent text-gray-500 hover:text-orange-500 hover:bg-orange-50 disabled:opacity-40 active:scale-95",
  };
  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {loading && <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
      {children}
    </button>
  );
}