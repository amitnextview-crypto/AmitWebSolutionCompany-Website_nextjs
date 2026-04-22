// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#6366f1",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
      },
    },
  },
  plugins: [],
};
