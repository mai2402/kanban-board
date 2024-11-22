import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
    content : [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme : {
        extend: {
            colors: {
                primary: '#d0deff', 
                secondary: '#e4ecff', 
                accent: '#ffd6e4', 
                background: '#ffffff', 
                text: '#d6e4ec', 
                alternativeBackground: '#ecffd6', 
            }
        }
    },
    plugins : [
        require('tailwind-scrollbar'), 
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': { 'scrollbar-width': 'thin' },
        '.scrollbar-thumb-blue-500': {
          'scrollbar-color': '#4299e1 #ebf8ff',
           'border-radius':'20px',
        },
        '.scrollbar-track-blue-100': {
          'background-color': '#ebf8ff',
          'border-radius':'20px',
        },
      });
    }),
    ]
}
