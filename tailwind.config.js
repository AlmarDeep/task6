/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    fontSize:{
      'll' : '243.8px',
      'mm' :'160.8px',
      sm: '0.8rem',
      base: '1rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
    },
    extend: {
      spacing: {
        '30p': '30px',
      },
      colors: {
        'purple': ' #6941C6',
        'lightpb':' #F9F5FF',
         'lightbb':'#EEF4FF', 
         'lightpi':' #FDF2FA',
         'tblue' :' #3538CD',
         'tpink':'#C11574',
         'tgray':'#667085',
         'bpurple':' #7F56D9'
      },
    },
   
  },
  plugins: [],
}

