const { v4: uuidv4 } = require("uuid");

const genId = function (id) {
  if (id === "-1" || id === "new") {
    return uuidv4();
  } else {
    return id;
  }
};

module.exports = {
  genId,
};
