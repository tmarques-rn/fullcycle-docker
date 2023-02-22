const express = require('express')

const app = express()
const port = 3000

const peopleRepository = require('./repository/people')

peopleRepository.createTable();

app.get('/', async (req, resp) => {
  await peopleRepository.createPerson('Thiago');
  const people = await peopleRepository.getAllPeople();
  const htmlItems = people.map(person => `<li>${person.name}</li>`).join('');
  resp.send(`<h1>Full Cycle</h1><ul>${htmlItems}</ul>`);
})

app.listen(port, () => {
  console.log('Rodando na porta' + port)
});