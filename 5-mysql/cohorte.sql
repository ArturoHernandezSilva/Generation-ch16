CREATE TABLE cohorte(
cohorte12_id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

SELECT * FROM cohorte;


-- Agregar llave foránea
ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_alumno
FOREIGN KEY (alumno_id)

REFERENCES alumno (alumno_id);


ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_instructor
FOREIGN KEY (instructor_id)

REFERENCES instructor (instructor_id);