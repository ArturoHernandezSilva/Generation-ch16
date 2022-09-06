USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;


SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais ASC;


-- Disinct filtra los datos repetidos. No muestra repetidos
SELECT DISTINCT Continent FROM country; 

SELECT Continent FROM country; 

-- WHERE clausula
-- < > <= >= != =
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy ASC;


-- ! es como en JS
SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent;