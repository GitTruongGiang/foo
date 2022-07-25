const { AppError, sendResponse } = require("../helpers/utils");
const boo = require("../models/Boo");
const foo = require("../models/Foo");
const booController = {};

booController.createBoo = async (req, res, next) => {
  const info = {
    name: "any",
    description: "any boo",
  };
  try {
    if (!info) throw new AppError(400, "Bad Request", "Create Boo Error");
    const created = await boo.create(info);
    sendResponse(res, 200, true, { data: created }, null, "Create Boo Success");
  } catch (error) {
    next(error);
  }
};
booController.getAllBoo = async (req, res, next) => {
  const filter = {};
  try {
    const listOfFound = await boo.find(filter).populate("referenceTo");
    sendResponse(
      res,
      200,
      true,
      { data: listOfFound },
      null,
      "Get All Boo Succes"
    );
  } catch (error) {
    next(error);
  }
};
booController.updateBoo = async (req, res, next) => {
  console.log(req.params);
  const { targetName } = req.params;
  const { ref } = req.body;
  try {
    let found = await boo.findOne({ name: targetName });
    const refFound = await foo.findById(ref);
    if (!refFound) throw new AppError(404, "Not Found", "Bad request");
    found.referenceTo = ref;
    found = await found.save();
    sendResponse(
      res,
      200,
      true,
      { data: found },
      null,
      "Add reference success"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = booController;
