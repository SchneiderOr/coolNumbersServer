import express from "express";
import generalRouter from "./routes/index.js";
import randomNumbersRouter from "./routes/randomNumbers.js";
import logger from "morgan";
import cors from "cors";

const PORT = process.argv[2] || process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(logger(process.env.NODE_ENV || "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", generalRouter);
app.use("/randomNumbers", randomNumbersRouter);

// Global error handling goes here...
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  const error = res.status(err.status || 500).send(err);
});

app.listen(PORT, () => {
  console.log(`Your hero's server runing on port ${PORT}`);
});
