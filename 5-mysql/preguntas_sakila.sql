USE sakila;

SELECT * FROM sakila.film_text WHERE AND SELECT * FROM sakila.film_actor;

SELECT * FROM sakila.film_text WHERE film_id = 1
LEFT JOIN ;

SELECT * FROM title AND description AND actor_id = 1;

SELECT actor.actor_id, actor.first_name, actor.last_name FROM actor
INNER JOIN film_actor ON film_actor.actor_id=film_actor.film_id;
-- titulo pelis con idioma
SELECT
film.title as TituloDePeli
FROM film
INNER JOIN language on language.name = film.title
Order by TituloDePeli;

-- titulo de pelis con idioma
SELECT title, name FROM film, language; 


-- costo por dia
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;
