// Importiere die Datenbankverbindung
const db = require('./db');

// Hole Essen-Artikel nach Kategorie
app.get('/essen', (req, res) => {
  const { category } = req.query;
  const query = `SELECT * FROM essen WHERE essenkategorie = ?`;

  // Führe die Abfrage aus, um Essen-Artikel basierend auf der Kategorie abzurufen
  db.query(query, [category], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });  // Behandle Abfragefehler
    }
    res.json(results);  // Sende die Ergebnisse als JSON-Antwort
  });
});

// Hole Anime-Artikel nach Kategorie
app.get('/anime', (req, res) => {
  const { category } = req.query;
  const query = `SELECT * FROM anime WHERE animekategorie = ?`;

  // Führe die Abfrage aus, um Anime-Artikel basierend auf der Kategorie abzurufen
  db.query(query, [category], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });  // Behandle Abfragefehler
    }
    res.json(results);  // Sende die Ergebnisse als JSON-Antwort
  });
});

// Überprüfe die Verfügbarkeit des Lagerbestands für Essen und Anime
app.get('/check-stock', (req, res) => {
  const { id, type } = req.query;

  // Bestimme die Abfrage basierend auf dem Typ (Essen oder Anime)
  const query = type === 'Essen'
    ? 'SELECT essenauflager AS stock FROM essen WHERE id = ?'
    : 'SELECT animeauflager AS stock FROM anime WHERE id = ?';

  // Führe die Abfrage aus, um die Verfügbarkeit des Lagerbestands zu überprüfen
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });  // Behandle Abfragefehler
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Artikel nicht gefunden' });  // Behandle den Fall, wenn der Artikel nicht gefunden wird
    }

    const available = results[0].stock > 0;
    res.json({ available });  // Sende die Lagerverfügbarkeit als JSON-Antwort
  });
});
