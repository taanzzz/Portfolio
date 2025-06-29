/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx,css}',
    // এই লাইনটি যোগ করুন যাতে Tailwind আপনার CSS ফাইল স্ক্যান করে
    './src/**/*.css', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};