export function Button({ children, className = "", ...props }) {
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

