USE generation;

CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieres INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);

SELECT * FROM cohorte_16;


INSERT INTO cohorte_16 (nombre, apellido, companieres, direccion, proyecto)
VALUES ('Victor', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java'),
('Jonatan', 'Vazquez', 6, 'CDMX', 'Javascript'),
('Raul', 'Sanchez', 4, 'Guadalajara', 'Java'),
('Maria', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java'),
('Magali', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java');

SELECT * FROM cohorte_16;

DELETE FROM cohorte_16
WHERE alumno_id = 3;

UPDATE cohorte_16
SET nombre = 'Marina',
apellido = 'Pardo'
WHERE alumno_id = 5;

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM  cohorte_16 WHERE nombre = 'Victor';

SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido ASC;
/*ASC - DESC*/