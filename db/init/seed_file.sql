DROP TABLE IF EXISTS users; 

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INTEGER,
    country VARCHAR(80)
);

INSERT INTO users (name, age, country)
VALUES 
('Betty', 25, 'England'),
('Wilma', 34, 'Ireland'),
('Fred', 32, 'Iceland'),
('Bamm-Bamm', 2, 'England'),
('Pebbles', 3, 'Ireland');