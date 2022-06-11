DROP DATABASE IF EXISTS objects;
CREATE DATABASE objects;
USE objects
DROP TABLE IF EXISTS boxies;
CREATE TABLE boxies (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, scale_x INT NOT NULL, scale_y INT NOT NULL, scale_z INT NOT NULL, pos_x INT NOT NULL, pos_y INT NOT NULL, pos_z INT NOT NULL) DEFAULT CHARACTER SET=utf8;
insert into boxies (name, scale_x, scale_y, scale_z, pos_x, pos_y, pos_z) values ("test_1", 1, 1, 1, -1.2, 0, 0);
insert into boxies (name, scale_x, scale_y, scale_z, pos_x, pos_y, pos_z) values ("test_2", 1, 1, 1, 1.2, 0, 0);
