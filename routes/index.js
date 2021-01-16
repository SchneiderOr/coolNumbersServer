import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello!");
});

router.get("/health", (req, res, next) => {
  res.send("OK");
});

export default router;
