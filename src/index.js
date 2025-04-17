import "dotenv/config";
import app from "./app.js";
import errorHandler from "./middlewares/errorHandler.js";

// Welcome route
app.get("/", (req, res) => {
  return res.send("Welcome to Ecommerce REST APIs.");
});

// API routes

// Error handler middleware
app.use(errorHandler);

// Start server
const startServer = () => {
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
