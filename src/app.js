import express from "express";
import cors from "cors";
import helmet from "helmet";
import limiter from "./middlewares/rateLimiter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());
app.use(helmet());
app.use(limiter);

export default app;
