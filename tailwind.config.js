module.exports = {
    // Optimizar: Elimina las clases sin usar
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
