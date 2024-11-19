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
    plugins : []
}
