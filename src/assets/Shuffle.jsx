export function Shuffle({ className = "w-4 h-4 text-white" }) {
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
      <path d="M4 6h4l3 4 3-4h6" />
      <path d="M17 3l3 3-3 3" />
      <path d="M4 18h4l3-4 3 4h6" />
      <path d="M17 15l3 3-3 3" />
    </svg>
  );
}
