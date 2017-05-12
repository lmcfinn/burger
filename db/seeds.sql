INSERT INTO burgers (burger_name) VALUES ("Duck Breast Burger");
INSERT INTO burgers (burger_name) VALUES ("Bacon Burger");
INSERT INTO burgers (burger_name) VALUES ("Veggie Burger");
INSERT INTO burgers (burger_name) VALUES ("Fries Burger");

UPDATE burgers SET devoured = false WHERE id = 7;
DELETE FROM burgers WHERE id=12;