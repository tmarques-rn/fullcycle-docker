const { query } = require('../database');

async function createTable() {
  const sql = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, 
    name varchar(255), primary key(id) )`;
  await query(sql);
}

async function createPerson(name) {
  const sql = `INSERT INTO people (name) values ('${name}')`;
  return await query(sql);
}

async function getAllPeople() {
  const sql = `SELECT name FROM people`;
  return await query(sql);
}

module.exports = { createTable, createPerson, getAllPeople }
