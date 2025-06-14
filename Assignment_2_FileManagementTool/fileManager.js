const fs = require("fs");
var create = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, content);
    console.log("file created successfully");
    return true;
  } catch (e) {
    console.log("Error :" + e);
    return false;
  }
};

var read = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, "utf-8");
    return data;
  } catch (e) {
    console.log("Error in reading file : " + e);
    return undefined;
  }
};

var deleteFile = (fileName) => {
  try {
    fs.unlinkSync(fileName);
    console.log(fileName + ": File deleted successfully!");
    return true;
  } catch (e) {
    console.log("Error while deleting file :" + e);
    return false;

  }
};
module.exports = { create, read, deleteFile };
