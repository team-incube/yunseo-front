export function MapPin({ color = "#60A5FA", size = 24, ...props }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.54 4.96 9.86 6.21 11.1a.9.9 0 0 0 1.58 0C14.04 18.86 19 13.54 19 9c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  );
}