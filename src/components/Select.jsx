export function Select({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="appearance-none w-full border border-border rounded-lg px-3 py-2 bg-white
                   focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      >
        {children}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 9l6 6 6-6"
        />
      </svg>
    </div>
  );
}
