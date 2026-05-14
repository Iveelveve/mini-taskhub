export default function Card({ children, variant = "default", className = "", ...props }) {
  const variants = {
    default: "bg-white shadow-sm hover:shadow-md border border-gray-100",
    flat: "bg-gray-50",
    bordered: "bg-transparent border-2 border-gray-200",
  };
  return (
    <div className={`rounded-xl p-4 transition-shadow duration-200 ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}