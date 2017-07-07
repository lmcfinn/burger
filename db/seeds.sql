INSERT INTO burgers (burger_name) VALUES ("Duck Breast Burger");
INSERT INTO burgers (burger_name) VALUES ("Bacon Burger");
INSERT INTO burgers (burger_name) VALUES ("Veggie Burger");
INSERT INTO burgers (burger_name) VALUES ("Fries Burger");

UPDATE burgers SET devoured = false WHERE id = 7;
DELETE FROM burgers WHERE id=12;


INSERT INTO burgers (burger_name, devoured, createdAt) VALUES (“Duck Breast Burger”, true, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, createdAt) VALUES (“Bacon Burger”, true, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, createdAt) VALUES (“Veggie Burger”, false, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, createdAt) VALUES (“Fries Burger”, false, CURRENT_TIMESTAMP);