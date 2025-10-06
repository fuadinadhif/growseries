import App from "../src/app.js";

// Create an instance of the app
const appInstance = new App();

// Export the Express app for Vercel's serverless function handler
export default appInstance.app;
