/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'move-up-down': 'upDown 3s ease-in-out infinite',
        'move-left-right': 'leftRight 3s ease-in-out infinite',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        leftRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateY(40px)' },
        },
      },
      colors: {
        hoverColor: '#CD9010',
        selectType: '#FFF3DB',
        dashboard: '#042949',
        searchbar: '#4F698B',
      },
      screens: {
        '344': '344px',
        '375': '375px',
        '500': '500px',
        '380': '380px',
        '360': '360px',
        '400': '400px',
        '600': '600px',
        '768': '768px',
        '800': '800px',
        '1024': '1024px',
        '1025': '1025px',
        '1200': '1200px',
        '1367': '1367px',
        '700': '700px',
        '900': '900px',
        '1487': '1487px',
        '540': '540px',
        '650': '650px',
        '600': '600px',
        '1150': '1150px',
        '370': '370px',
      },
    },
  },
  plugins: [],
};


