import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
    content : [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme : {
        extend: {
            colors: {
                primary: '#d0deff', // Light Blue
                secondary: '#e4ecff', // Very Light Blue
                accent: '#ffd6e4', // Light Pink
                background: '#ffffff', // White
                text: '#d6e4ec', // Light Grayish Blue
                alternativeBackground: '#ecffd6', // Light Green (Optional)
            }
        }
    },
    plugins : [
        require('tailwind-scrollbar'), // Add this plugin
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
