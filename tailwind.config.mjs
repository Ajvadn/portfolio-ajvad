/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                primary: '#f1f5f9',
                secondary: '#2dd4bf',
            },
            fontFamily: {
                sans: ['"Latin Modern Mono"', 'monospace'],
                heading: ['"Latin Modern Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}
