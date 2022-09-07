SELECT * FROM sakila.address;

USE sakila;

-- SUM(), AVG(), COUNT ()

SELECT customer_id, amount FROM payment;

-- COUNT() CUENTA LAS FILAS DE UNA TABLA
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de rentas que tuvo trabajador 2
SELECT COUNT(*) FROM pyment WHERE staff_id = 1;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT costumer_id) FROM payment;

-- SUM
SELECT SUM(payment_date) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;



-- Cuál cliente realizó más rentas
SELECT costumer_id, COUNT(*) FROM payment GROUP BY costumer_id ORDER BY COUNT(*) ASC; 

-- GROUP BY -- agrupa solo si se usa SUM, AVG Y COUNT, pero omite los valores repetidos
-- ORDER BY ordena segun la columna o funcion que le indiquemos ASC / desc
SELECT * FROM payment ORDER BY staff_id; 
SELECT * FROM payment GROUP BY staff_id; -- omite los repetidos



-- cual es el cliente que mas gasto? 526 -221.55 / 248 - 50.85
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;

SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC; -- as total le da nombre de variable a sum (amount) para no estar esribiendolo


-- AVG regresa el promedio
SELECT AVG(amount) AS Promedio FROM payment;

-- Cual cliente gastó mas en promedio 
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;

-- con alias:
SELECT customer_id, AVG(amount) AS promediocliente FROM payment GROUP BY customer_id ORDER BY promediocliente DESC;








