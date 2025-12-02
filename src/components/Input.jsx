export function Input({ label, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-bold text-text"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={
          "border border-border rounded-md px-3 py-2 bg-white " +
          "focus:outline-none focus:ring-2 focus:ring-primary/50 transition " +
          className
        }
        {...props}
      />
    </div>
  );
}
