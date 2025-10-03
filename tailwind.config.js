/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors:{
        'background':'#ffffff',
        'text':'#1e3a8a',
        'primary':'#3b82f6',
        'card':'#f1f5f9',
        'error':'#ef4444',
        'ring': 'rgba(59, 130, 246, 0.5)',
        'hr':'#cbd5e1',
        'border': '#d1d5db'
      }
    },
  },
  plugins: [],
}

