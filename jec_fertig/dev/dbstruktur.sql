CREATE DATABASE jec_lieferung;
USE jec_lieferung;

CREATE TABLE essen (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  essenname VARCHAR(45) NOT NULL,
  essenbeschreibung VARCHAR(60),
  essenkategorie ENUM('Nigiri-Sushi', 'Rollen', 'Bowl', 'Desserts'),
  essenpreis DECIMAL(10, 2) NOT NULL,
  essenauflager INT NOT NULL
);

CREATE TABLE anime (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  animename VARCHAR(45) NOT NULL,
  animebeschreibung VARCHAR(60),
  animekategorie ENUM('Figuren', 'Anhaenger', 'Wandrollen', 'Manga'),
  animepreis DECIMAL(10, 2) NOT NULL,
  animeauflager INT NOT NULL
);

CREATE TABLE kunde (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  kundename VARCHAR(50),
  strasse VARCHAR(50),
  hausnummer VARCHAR(10),
  plz VARCHAR(10),
  ort VARCHAR(30),
  telefonnummer VARCHAR(30)
);

CREATE TABLE bestellung (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  kundeid INT NOT NULL,
  summe DECIMAL(10, 2) NOT NULL,
  lieferungstatus ENUM('Bestellt', 'Zubereitung', 'Versendet', 'Geliefert', 'Nicht geliefert'),
  zahlungsart ENUM('PayPal', 'Kreditkarte', 'Lastschrift', 'Vorkasse'),
  FOREIGN KEY (kundeid) REFERENCES kunde(id)
);

CREATE TABLE bestellungdetails (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bestellungid INT NOT NULL,
    warentyp ENUM('Essen', 'Anime') NOT NULL,
    warenid INT NOT NULL,
    warenanzahl INT NOT NULL,
    FOREIGN KEY (bestellungid) REFERENCES bestellung(id)
);