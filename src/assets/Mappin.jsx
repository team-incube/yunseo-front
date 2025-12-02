export function MapPin({ className = "w-5 h-5 text-primary/80" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21s-5.5-6.1-5.5-11A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 5.5 5.5C17.5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2" />
    </svg>
  );
}
