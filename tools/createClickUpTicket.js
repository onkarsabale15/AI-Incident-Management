const axios = require('axios');

async function createClickUpTicket({title, description, solutions, source}) {
  console.log({title, description, solutions, source}) // the logic to create a ticket can be added here as this is just a POC I havend added it
}

module.exports = createClickUpTicket;
