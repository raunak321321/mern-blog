import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import commentRoutes from "./routes/commentRoutes";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import connectDB from "./db/dbConfig";
import passport from "passport";
import { passport as passportMiddleware } from "./middlewares/passport";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

const port = process.env.PORT || 5000;

function setupServer() {
  connectDB();
  middlewares();
  app.use("/api/posts", postRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/comments", commentRoutes);
  app.use("/api/auth", authRoutes);

  //Non api requests in production
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
  ) {
    // If Express doesn't recognize route serve index.html
    const path = require("path");
    // Express will serve up production assets i.e. main.js
    app.use(express.static(path.join(__dirname, "./../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./../client/build", "index.html"));
    });

    // Add production middleware such as redirecting to https
    app.use(
      createProxyMiddleware(["/api"], { target: "http://localhost:5000" })
    );
  }

  // app.use(express.static(path.join(__dirname, "./../client/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./../client/build", "index.html"));
  // });
}

function middlewares() {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // Passport middleware
  app.use(passport.initialize());
  passportMiddleware;
}

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

setupServer();
