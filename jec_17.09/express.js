app.get('/essen', (req, res) => {
    const { category } = req.query;
    const query = `SELECT * FROM essen WHERE essenkategorie = ?`;
    db.query(query, [category], (err, results) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.json(results);
      }
    });
  });
  