CREATE TABLE direccion(
alumno_id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

SELECT * FROM direccion;


-- Agregar llave foránea
ALTER TABLE direccion
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)

REFERENCES alumno (alumno_id);