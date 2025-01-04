const mysql = require('mysql2/promise');

// Create the connection to database
const webinar = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'ticketing',
});


module.exports = webinar
