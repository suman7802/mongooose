const user = require("./user.schema");

async function postData(data) {
  await user.updateOne(
    {
      name: data.name,
      body: data.body,
    },
    {
      name: data.name,
      body: data.body,
    },
    {
      upsert: true,
    }
  );
}

async function getAllData() {
  const result = await user.find({});
  const response = [];
  for await (data of result) {
    response.push(data);
  }
  return response;
}
getAllData();

async function getData(name) {
  const result = await user.findOne({name: name});
  return result;
}

async function deleteData(name) {
  return await user.deleteOne({name: name});
}

async function deleteAllData() {
  return await user.deleteMany({});
}

module.exports = {
  postData,
  getAllData,
  getData,
  deleteData,
  deleteAllData,
};
