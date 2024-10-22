export default [
    {
        plugins: [
            "tailwindcss",
        ],
        rules: {
            "tailwindcss/enforces-negative-arbitrary-values": "error",
            "tailwindcss/enforces-shorthand": "error",
            "tailwindcss/no-contradicting-classname": "error",
            "tailwindcss/no-custom-classname": "error",
        },
    },
];
