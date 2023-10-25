module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("autoprefixer"),
//     require("cssnano")({
//       preset: [
//         "default",
//         {
//           discardComments: {
//             removeAll: true,
//           },
//         },
//       ],
//     }),
//   ],
// };
