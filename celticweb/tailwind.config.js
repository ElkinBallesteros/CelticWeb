/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ligth-gray' : '#888888',
        'main-gray' : '#525152',
        'main-dark-gray' : '#3D3D3D',
        'main-blue' : '#0A526B',
      },
      backgroundImage:{
        'hr-pattern': "url('/src/Pages/Home/Images/human-resource2.jpg')",
      },      
    },
  },
  plugins: [],
}

