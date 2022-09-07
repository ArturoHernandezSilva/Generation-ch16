USE tienda;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

SELECT * FROM tienda.clientes;


-- inner join
-- explicita

SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (7, '2022-09-06', 300.50, 3);




SELECT
clientes.cliente_id,  -- lo que queremos que aprezca despues de select      
clientes.nombre,
compra.*
FROM clientes -- primera tabla
INNER JOIN compra -- segunda tabla
ON clientes.cliente_id = compra.cliente_id; -- columnas que se toman como base



-- lo mismo que lo anterior pero modificado
SELECT
clientes.cliente_id AS 'Numero cliente',  -- lo que queremos que aprezca despues de select      
clientes.nombre AS Nombre,
compra.*
FROM clientes -- primera tabla
INNER JOIN compra -- segunda tabla
ON clientes.cliente_id = compra.cliente_id; -- columnas que se toman como base


-- lo mismo que lo anterior pero solo con fecha
SELECT
clientes.cliente_id AS 'Numero cliente',  -- lo que queremos que aprezca despues de select      
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes -- primera tabla
INNER JOIN compra -- segunda tabla
ON clientes.cliente_id = compra.cliente_id; -- columnas que se toman como bas



-- union implícita porque no usamos palabra join y da el mismo resultado. solo es como JOIN, no como las otras uniones
SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;



-- LEFT JOIN MUEStra todos los valores de la izquierda. los de la derecha muestra null si no hay coincidencia
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;


-- RIGHT JOIN
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;


SELECT 
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

-- 3 columnas de 3 tablas diferentes
SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON country.country_id = city.country_id
INNER JOIN address ON address.city_id = city.city_id;