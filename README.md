docker-compose up

npm install express express-fileupload body-parser mysql ejs req-flash --save
sudo npm install nodemon -g




SQL:
-- o Medikament
-- o alternativmedizinisch
-- o Lebensstil
-- 	- Umzug
-- 	- Urlaub
-- 	- Meditation
-- o Ernährung
-- o verschriebenes Verfahren

CREATE TABLE ACTION_CATEGORIES (
	ID int NOT NULL AUTO_INCREMENT,
	description varchar(255) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE JESSI1 (
  ID int NOT NULL AUTO_INCREMENT,
  illness varchar(255) NOT NULL,		-- zB Bauchschmerzen
  illness_start DATE NOT NULL,
  action_categorie int NOT NULL,		-- siehe oben, zB Ernährung
  action_name varchar(255) NOT NULL,	-- zB Salyzuelsaeure
  action_application varchar(255) NOT NULL, -- wie wurde es angewendet, zB. subkutan, Umschlag, auf Wunde geschmiert
  action_dose varchar(255) NOT NULL,
  action_start date NOT NULL,
  improvement int NOT NULL,
  improvement_start date,
  relevant_infos text,
  further_infos text,   
  gender varchar(255),
  age int,
  PRIMARY KEY (ID)
);

-- copy of illness entry in JESSI1
CREATE TABLE ILLNESS (
	ID int NOT NULL AUTO_INCREMENT,
	description varchar(255) NOT NULL,
	PRIMARY KEY (ID)
);

