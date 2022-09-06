CREATE TABLE alumno(
alumno_id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

SELECT * FROM alumno;



-- Agregar valores en alumno
INSERT INTO alumno(alumno_id, edad, CURP, RFC, nivel_ingles, amonestaciones)
VALUES (1, 22, HESA, HESA, B, 0);


SELECT * FROM alumno;