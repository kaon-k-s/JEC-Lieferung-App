const mysql = require('mysql2');

// Erstellen einen Verbindungs-Pool zur MySQL-Datenbank
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jec_lieferung',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db; // Exportieren den Verbindungs-Pool zur Verwendung in anderen Dateien
