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
    </div>
  );
}