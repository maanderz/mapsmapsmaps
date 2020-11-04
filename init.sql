CREATE TABLE addresses (
  ID SERIAL PRIMARY KEY,
  address VARCHAR(255) NOT NULL
);

INSERT INTO addresses (address)
VALUES  ('188 Kingsway');