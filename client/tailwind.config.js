/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pc': "url('https://wallpaper-mania.com/post/wallpaper-id-777000549527/')",
        // 'movil': "url('https://i.pinimg.com/564x/bd/80/d2/bd80d286df3ae415c50e20fe61b86373.jpg')"
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'marker' : ['Permanent Marker', 'sans-serif']
      }
    },
  },
  plugins: [],
}
