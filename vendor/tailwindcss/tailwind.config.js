/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../../**/*.{html,js}"],
    theme: {
        plugins: [],
        extend: {
            backgroundImage: {
                'content-bg': 'url("../../assets/images/content-background.svg")',
                'tools-button-icon': 'url("../../assets/images/tools-button-icon.svg")',
            },
            flex: {
                '50': '0 0 40%'
            }
        },
        screens: {
            // 'xs': {'max': '640px'},
            // 'sm': {'min': '641px', 'max': '767px'},
            // 'md': {'min': '768px', 'max': '1023px'},
            // 'lg': {'min': '1024px', 'max': '1279px'},
            // 'xl': {'min': '1280px', 'max': '1535px'},
            // '2xl': {'min': '1536px'},
            'sm': {'max': '750px'},
            'lg': {'min': '751px'}
        },
    }
}

