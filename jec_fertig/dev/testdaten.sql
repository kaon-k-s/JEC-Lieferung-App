INSERT INTO essen (essenname, essenbeschreibung, essenkategorie, essenpreis, essenauflager) VALUES
('Sake Nigiri (2 Stück)', 'Mit schottischem Lachs', 'Nigiri-Sushi', 4.90, 4),
('Maguro Nigiri (2 Stück)', 'Mit Thunfisch', 'Nigiri-Sushi', 5.90, 3),
('Avocado Nigiri (2 Stück)', 'Mit Avocado', 'Nigiri-Sushi', 3.90, 9);

INSERT INTO anime (animename, animebeschreibung, animekategorie, animepreis, animeauflager) VALUES
('Monkey D. Ruffy - One Piece', 'Acrylhänger - Höhe 6.00 cm', 'Anhaenger', 9.90, 1),
('Chibi Eren - Attack on Titan', 'Schlüsselanhänger', 'Anhaenger', 8.95, 1),
('Xiao', 'Schlüsselanhänger', 'Anhaenger', 13.90, 1);

INSERT INTO kunde (kundename, strasse, hausnummer, plz, ort, telefonnummer) VALUES
('Erste Kunde', 'Juliusstr.', '2', '11111', 'Berlin', '0123456789');

INSERT INTO bestellung (kundeid, summe, lieferungstatus, zahlungsart) VALUES
(1, 23.04, 'Bestellt', 'Kreditkarte');

INSERT INTO bestellungdetails (bestellungid, warentyp, warenid, warenanzahl) VALUES
(1, 'Essen', 2, 3),
(1, 'Anime', 3, 1);
