import express from "express";
import lodash from "lodash";
import apiClient from "../services/apiClient.js";
import { getRandomArbitrary } from "../utils/index.js";
import GenericError from "../utils/errorHanlder.js";
import GenericeError from "../utils/errorHanlder.js";

const { get, first } = lodash;

const router = express.Router();
router.get("/random", (req, res, next) => {
  const { limit, min = 0, max = 100 } = req.query;
  try {
    const data = Array.from({ length: limit }, () =>
      getRandomArbitrary(+min, +max)
    );

    res.send({ success: true, data, totalCount: data.length });
  } catch (error) {
    throw new GenericeError({ status: 500, code: 0, error, next });
  }
});

export default router;
