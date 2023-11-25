import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.elred.io/",
    // baseURL: 'http://localhost:3000/',

  // timeout: 5000, // milliseconds
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// // Create an instance of axios with default configuration
// const instance = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? process.env.BASE_URL_PROD
//       : process.env.BASE_URL_LOCAL,
// });

export default instance;
