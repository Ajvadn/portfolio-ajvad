/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                primary: '#ffffff',
                secondary: '#a1a1aa',
            },
            fontFamily: {
                sans: ['"LMMono10"', 'monospace'],
                heading: ['"LMMono10"', 'monospace'],
            },
        },
    },
    plugins: [],
}
