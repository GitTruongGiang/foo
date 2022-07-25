const { AppError, sendResponse } = require("../helpers/utils");
const foo = require("../models/Foo");

const fooControler = {};

fooControler.createFoo = async (req, res, next) => {
  const info = { name: "foo", flag: false };
  try {
    if (!info) throw new AppError(402, "Bad Request", "Create Foo Error");
    const created = await foo.create(info);
    sendResponse(res, 200, true, { data: created }, null, "Create Foo Success");
  } catch (error) {
    next(error);
  }
};
fooControler.getAllFoo = async (req, res, next) => {
  const filter = {};
  try {
    const listOfFound = await foo.find(filter);
    sendResponse(
      res,
      200,
      true,
      { data: listOfFound },
      null,
      "get All Foos Success"
    );
  } catch (error) {
    next(error);
  }
};
fooControler.updateFoo = async (req, res, next) => {
  const targetId = null;
  const updateInfo = "";
  const options = { new: true };
  try {
    const updated = await foo.findByIdAndUpdate(targetId, updateInfo, options);
    sendResponse(res, 200, true, { date: updated }, null, "Update Foo Success");
  } catch (error) {
    next(error);
  }
};
fooControler.deleteFoo = async (req, res, next) => {
  const targetId = null;
  const options = { new: true };
  try {
    const deleted = await foo.findOneAndDelete(targetId, options);
    sendResponse(res, 200, true, { data: deleted }, null, "Delete Foo success");
  } catch (error) {
    next(error);
  }
};

module.exports = fooControler;
