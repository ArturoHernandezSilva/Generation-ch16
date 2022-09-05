show databases;

create database tienda;

USE tienda;

-- DROP DATABASE tienda;

CREATE TABLE clientes (cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR (50) NOT NULL,
direccion VARCHAR (150) NOT NULL
);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Paramo', '5551538657', 'Comala'),
('Pedrito', 'Sola', '5551538657', 'Comala'),
('Paty', 'Chapoy', '5551538657', 'Comala');

SELECT * FROM clientes;
DELETE FROM clientes
WHERE cliente_id = 2;

DELETE FROM clientes
WHERE nombre = 'juan';
 