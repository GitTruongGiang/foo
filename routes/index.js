var express = require("express");
var router = express.Router();

/* GET home page. */
const fooApi = require("./foo.api");
const booApi = require("./boo.api");

const { sendResponse, AppError } = require("../helpers/utils");

router.get("/", function (req, res, next) {
  res.status(200).send("hello giang");
});

router.get("/template/:test", async (req, res, next) => {
  const { test } = req.params;
  try {
    if (test === "error") {
      throw new AppError(401, "Access denied", "Authentication Error");
    } else {
      sendResponse(
        res,
        200,
        true,
        { data: "template" },
        null,
        "template success"
      );
    }
  } catch (err) {
    next(err);
  }
});

router.use("/foo", fooApi);
router.use("/boo", booApi);

module.exports = router;
