const db = require('./db');

app.get('/essen', (req, res) => {
  const { category } = req.query;
  const query = `SELECT * FROM essen WHERE essenkategorie = ?`;

  db.query(query, [category], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get('/anime', (req, res) => {
  const { category } = req.query;
  const query = `SELECT * FROM anime WHERE animekategorie = ?`;

  db.query(query, [category], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get('/check-stock', (req, res) => {
  const { id, type } = req.query;

  const query = type === 'Essen'
    ? 'SELECT essenauflager AS stock FROM essen WHERE id = ?'
    : 'SELECT animeauflager AS stock FROM anime WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const available = results[0].stock > 0;
    res.json({ available });
  });
});
