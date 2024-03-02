/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../../**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'content-bg': 'url("../../assets/images/content-background.svg")',
            },
            flex: {
                '50': '0 0 40%'
            }
        },
        plugins: [],
    }
}

