const config = {
  connectionLimit: 5,
  host: 'db', // nome do host no docker
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql');
const pool = mysql.createPool(config);

function getConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) reject(err);
      resolve(connection);
    });
  })
}

function query(sql) {
  return new Promise(async (resolve, reject) => {
    const connection = await getConnection();
    connection.query(sql, function (err, result) {
      if (err) {
        connection.release();
        reject(err);
      }
      connection.release();
      resolve(result)
    });
  });
}

function closeConnections() {
  pool.end(function (err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Disconnected!");
  });
}

module.exports = { query, closeConnections }