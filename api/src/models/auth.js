const { query } = require("express");
const database = require("../components/database");
const { genId } = require("../components/utilities");

class Model {
  constructor() {
    this.db = new database();
  }

  async signUp(username, password, confirmation) {
    if (password != confirmation) {
      return {
        message: "Conrimación no coincide con el password",
      };
    }

    id = genId("-1");
    query = `
    INSERT INTO test.USERS(ID, USERNAME, PASSWORD)
    VALUES($1, $2, $3) RETURNING ID, USERNAME`;
    params = [id, username, password];

    return await this.db.insert(query, params).then((result) => {
      console.log(result);
      return {
        result,
      };
    });
  }

  async signIn(username, password) {
    return {
      username,
      password,
    };
  }
}

module.exports = Model;
