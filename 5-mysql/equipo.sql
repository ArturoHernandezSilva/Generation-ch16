CREATE DATABASE ejercicio_relaciones;

USE ejercicio_relaciones;

CREATE TABLE equipo(
alumno_id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

SELECT * FROM equipo;


-- Agregar llave foránea
ALTER TABLE equipo
ADD CONSTRAINT fk_alumno_equipo
FOREIGN KEY (alumno_id)

REFERENCES alumno (alumno_id);



-- BORRAR llave foranea

ALTER TABLE equipo
DROP FOREIGN KEY fk_alumno_equipo;






INSERT INTO equipo(alumno_id, nombre, cantidad_integrantes, logo)
VALUES (1, shades, 8, si);
