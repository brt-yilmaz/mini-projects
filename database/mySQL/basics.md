# Notes from mysqltutorial.org

## Basics

### SELECT STATEMENTS

SELECT NOW();SELECT NOW();
SELECT CONCAT('John',' ','Doe'); // result: John Doe
SELECT select_list FROM dual; // to test
SELECT expression AS column_alias; // AS is optional you can use : SELECT expression column_alias;

SELECT CONCAT('Jane',' ','Doe') AS 'Full name';
+-----------+
| Full name |
+-----------+
| John Doe  |
+-----------+

SELECT
   select_list
FROM
   table_name
ORDER BY
   column1 [ASC|DESC], // default ASC
   column2 [ASC|DESC],
   ...

// When executing the SELECT statement with an ORDER BY clause, MySQL always evaluates the ORDER BY clause after the FROM and SELECT clauses:

SELECT
    orderNumber,
    orderLineNumber,
    quantityOrdered * priceEach AS subtotal
FROM
    orderdetails
ORDER BY subtotal DESC;
