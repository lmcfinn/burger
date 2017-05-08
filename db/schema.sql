REATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE burgers (
	id int AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured boolean,
	date timestamp,
	PRIMARY KEY (id)
);