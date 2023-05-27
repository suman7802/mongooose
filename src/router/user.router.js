const {
  httpPostData,
  httpGetAllData,
  httpGetData,
  httpDeleteData,
  httpDeleteAllData,
} = require("../controller/user.controller");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/", httpPostData);
userRouter.get("/", httpGetAllData);
userRouter.get("/:name", httpGetData);
userRouter.delete("/:name", httpDeleteData);
userRouter.delete("/", httpDeleteAllData);

module.exports = userRouter;
