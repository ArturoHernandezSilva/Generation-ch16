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



-- beteween
-- se utiliza junto con where

SELECT* FROM country WHERE Population BETWEEN 500000 AND 700000 ORDER BY Population DESC;

SELECT* FROM country WHERE Population NOT BETWEEN 500000 AND 700000 ORDER BY Population DESC;

-- OR / AND / != -- logicos

SELECT* FROM country WHERE  Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';  

SELECT* FROM country WHERE  Continent != 'Asia' OR Continent != 'Europe' OR Continent != 'North America'; 



-- operador IN. busca donde aparezcan los elementos entre parentesis. Acorta OR y AND 
SELECT* FROM country WHERE  Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent; -- OR

SELECT* FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent; -- AND



-- LIKE sirve para buscar un patron en especifico
-- '%'  buscar cualquier entidad de caracteres
-- '_' especificamos un caracter
SELECT Name FROM country WHERE Name LIKE '%as%'; -- as antes y despues de cualquier letra.

SELECT Name FROM country WHERE Name LIKE '%e__a%';

SELECT Name FROM country WHERE Continent LIKE 'Asia';
