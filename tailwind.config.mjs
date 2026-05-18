/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#000000',
                'bg-panel': '#050505',
                'bg-surface': '#0a0a0a',
                'bg-elevated': '#0a0a0a',
                'text-primary': '#f7f8f8',
                'text-secondary': '#d0d6e0',
                'text-tertiary': '#8a8f98',
                'text-quaternary': '#62666d',
                accent: '#5c5cff',
                'accent-hover': '#6f7bff',
                brand: '#4a58c8',
                success: '#10b981',
            },
            fontFamily: {
                sans: ['"Latin Modern Mono"', '"LM Mono 8"', 'monospace'],
                mono: ['"Latin Modern Mono"', '"LM Mono 8"', 'monospace'],
            },
        },
    },
    plugins: [],
}
