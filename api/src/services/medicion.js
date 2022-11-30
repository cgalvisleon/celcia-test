const model = require("../models/medicion");

class Service {
  async getMedicion({ dateint, dateend }) {
    const model = new Model();
    return await mode.getMedicion(dateint, dateend);
  }

  async loadMedition({ filePath }) {
    const model = new Model();
    return await mode.loadMedition(filePath);
  }
}

module.exports = Service;
