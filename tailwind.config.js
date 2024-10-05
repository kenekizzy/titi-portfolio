/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.2px'],
      lg: ['18px', '27px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['36px', '43.2px'],
      '5xl': ['46px', '64px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nb: ['NBInternational'],
        workSans: ['WorkSans'],
        ogg: ['Ogg'],
        oggBook: ['OggBook']
      },
      animation: {
        bounce: 'bounceOut 3s ease-in-out'
      },
      colors: {
        'card-background': 'rgba(255, 255, 255, 0.08)',
        'card-heading': 'rgba(228, 194, 248, 0.56)',
        "card-description": "#B8B8B8",
        'card-coming-soon': 'rgba(255, 255, 255, 0.2)',
        'card-coming-soon-text': '#F0F0F0',
        "hero-description": "#E4E4E4",
        'primary': "#ECEEFF",
        'hero-secondaryButton': '#6D3091',
        'hero-primaryButton': '',
        'input-field-text': '#344054',
        'input-field-background': '#E0D9FB',
        'about-text': '#747474',
        'navbar': "#AFAABA",
        'project-heading': '#D7C8FC',
        'project-primary': 'rgba(28, 21, 45, 1)',
        'project-primary-fade': 'rgba(28, 21, 45, 0.9)',
        'user-color': '#0D1A33',
        'user-color-opacity': 'rgba(13, 26, 51, 0.8)',
        'body-color': '#3d485c',
        'playground-color': '#B8B8B8'
      },
      borderRadius: {
        "card": "20px"
      },
      width: {
        "card-width": "560px",
        "hero-header": '543px',
        "mobile-hero-header": '340px', 
        'hero-description': '639px',
        'mobile-hero-description': '390px'
      },
      height: {
        "card-height": "740px"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'card': "url('assets/images/card-section.png')",
        'contact-image': "url('assets/images/contac-form.png')",
        'coming-soon': "url('assets/images/coming-soon.png')"
      },
      backgroundColor: {
        "portfolio":  "rgba(28, 21, 45, 1)",
        "navbar": "rgba(55, 43, 82, 0.78)",
        "ellipse": "#31264A",
        'primaryButton': "#6D3091",
        'secondaryButton': '#EADAF3',
        "secondary-color": "rgba(238, 232, 253, 1)",
        'live-button': '#2672A5',
        'projects-color': '#1c152d'
      },
      screens: {
        "wide": "1440px"
      },
      keyframes: {
        bounceOut: {
         '0%':{ 
          transform: 'scale(1.1)', 
          opacity: '1',
          backgroundColor: 'var(--bounce-start-bg, #ff0000)'
          },
          '20%': {
            transform: 'scale(1)'
          },
          '50% 55%': {
            opacity: '1',
            transform: 'scale(1.1)',
            backgroundColor: 'var(--bounce-mid-bg, #ff0000)'
          },
          '100% ': {
            opacity: '1',
            transform: 'scale(1)',
            backgroundColor: 'var(--bounce-end-bg, #ff0000)'
          }
        }
      }
    },
  },
  plugins: [],
}

