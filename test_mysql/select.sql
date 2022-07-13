SELECT * FROM product ;

SELECT id , name, price FROM product WHERE price < 100 ;

SELECT id , name, price FROM product WHERE price > 120 AND name LIKE "%ข้าวโพด%";

SELECT id , name, price FROM product ORDER BY price ;

SELECT id , name, price FROM product ORDER BY price  DESC;

SELECT DISTINCT name FROM product ORDER BY name;

SELECT * FROM product LIMIT 3;