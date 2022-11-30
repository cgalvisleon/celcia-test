const Model = require("../models/auth");

class Service {
  async signUp({ username, password, confirmacion }) {
    const model = new Model();
    return await model.signUp(username, password, confirmacion);
  }

  async signIn({ username, password }) {
    const model = new Model();
    return await model.signIn(username, password);
  }
}

module.exports = Service;
