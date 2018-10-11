docker-compose up

npm install express express-fileupload body-parser mysql ejs req-flash --save
sudo npm install nodemon -g




CREATE TABLE JESSI1 (
  ID int NOT NULL AUTO_INCREMENT,
  illness varchar(255) NOT NULL,
  categorie int NOT NULL,
  description varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);
