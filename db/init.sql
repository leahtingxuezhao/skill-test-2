CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  url text NOT NULL,
  name varchar(40) NOT NULL,
  price integer NOT NULL
);