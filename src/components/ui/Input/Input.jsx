export default function Input({ label, errorMessage, id, className = "", textarea = false, ...props }) {
  const base = "w-full rounded-lg border-2 bg-transparent px-3 py-2 text-sm transition-colors duration-200 focus:outline-none placeholder:text-gray-400";
  const state = errorMessage ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange-500";
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label htmlFor={id} className="text-xs font-medium uppercase tracking-widest text-gray-500">{label}</label>}
      {textarea
        ? <textarea id={id} rows={4} className={`${base} ${state} resize-none`} {...props} />
        : <input id={id} className={`${base} ${state}`} {...props} />}
      {errorMessage && <p className="text-xs text-red-500 mt-0.5">⚠ {errorMessage}</p>}
    </div>
  );
}