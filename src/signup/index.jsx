export function SignupInput({ label, id, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-bold text-text mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full border border-border rounded-md px-3 py-2 bg-white
                   focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    </div>
  );
}

export function SignupSelect({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="appearance-none w-full border border-border rounded-lg px-3 py-2 bg-white
                   focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      >
        {children}
      </select>
    </div>
  );
}

export function SignupButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "bg-primary text-white text-sm rounded-lg px-4 py-2 font-bold hover:bg-primary/90 transition-colors whitespace-nowrap flex-shrink-0 " +
        className
      }
    >
      {children}
    </button>
  );
}

