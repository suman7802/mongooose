const {
  postData,
  getAllData,
  getData,
  deleteData,
  deleteAllData,
} = require("../model/user.model");

async function httpPostData(req, res) {
  const data = req.body;
  return res.status(200).json(await postData(data));
}

async function httpGetAllData(req, res) {
  return res.status(200).json(await getAllData());
}

async function httpGetData(req, res) {
  const name = req.params.name;
  return res.status(200).json(await getData(name));
}

async function httpDeleteData(req, res) {
  const name = req.params.name;
  return res.status(200).json(await deleteData(name));
}

async function httpDeleteAllData(req, res) {
  return res.status(200).json(await deleteAllData());
}

module.exports = {
  httpPostData,
  httpGetAllData,
  httpGetData,
  httpDeleteData,
  httpDeleteAllData,
};
