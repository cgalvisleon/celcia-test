const Model = require("../models/auth");
const config = require("./config");

class database {
  constructor() {
    this.writeDB = new Client({
      user: config.db_user,
      host: config.db_host,
      database: config.db_database,
      password: config.db_password,
      port: config.db_port,
    });

    this.readDB = new Client({
      user: config.read_db_user,
      host: config.read_db_host,
      database: config.read_db_database,
      password: config.read_db_password,
      port: config.read_db_port,
    });
  }

  connectWrite() {
    if (!database.connectionWrite) {
      database.connectionWrite = new Promise((resolve, reject) => {
        this.writeDB.connect((err) => {
          if (err) {
            this.log.error(err);
            reject(err);
          }
          console.log("Connected succesfully to postgresql");
          resolve(this.writeDB);
        });
      });
    }

    return database.connectionWrite;
  }

  connectRead() {
    if (!database.connectionRead) {
      database.connectionRead = new Promise((resolve, reject) => {
        this.readDB.connect((err) => {
          if (err) {
            this.log.error(err);
            reject(err);
          }
          console.log("Connected succesfully to postgresql");
          resolve(this.readDB);
        });
      });
    }

    return database.connectionRead;
  }

  async select(query, params) {
    const db = await this.connectRead();
    return await db
      .query(query, params)
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        this.log.error(err);
        throw err;
      });
  }

  async insert(query, params) {
    const db = await this.connectWrite();
    return await db
      .query(query, params)
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        this.log.error(err);
        throw err;
      });
  }

  async update(query, params) {
    const db = await this.connectWrite();
    return await db
      .query(query, params)
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        this.log.error(err);
        throw err;
      });
  }

  async delete(query, params) {
    const db = await this.connectWrite();
    return await db
      .query(query, params)
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        this.log.error(err);
        throw err;
      });
  }
}

module.exports = database;
