CREATE TABLE Farms (
  id SERIAL PRIMARY KEY,
  premiseid VARCHAR(255) UNIQUE,
  total_animal INTEGER
);

CREATE TABLE Movements (
  id SERIAL PRIMARY KEY,
  new_originpremid VARCHAR(255) unique,
  new_destinationpremid VARCHAR(255),
  new_numitemsmoved INTEGER,
  new_movementreason VARCHAR(255),
  new_species VARCHAR(255),
  new_shipmentsstartdate VARCHAR(255),
  FOREIGN KEY (new_originpremid) REFERENCES Farms(premiseid),
  FOREIGN KEY (new_destinationpremid) REFERENCES Farms(premiseid)
);
