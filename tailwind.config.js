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
       
    ]
}
