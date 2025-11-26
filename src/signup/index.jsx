export function SignupInput({ label, id, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-bold text-[#1e3a8a] mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full border border-[#d1d5db] rounded-md px-3 py-2 bg-white
                   focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 transition"
      />
    </div>
  );
}

export function SignupSelect({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="appearance-none w-full border border-[#d1d5db] rounded-lg px-3 py-2 bg-white
                   focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 transition"
      >
        {children}
      </select>
    </div>
  );
}
