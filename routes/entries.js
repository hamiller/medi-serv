const fs = require('fs');

module.exports = {
    addEntryPage: (req, res) => {
        res.render('add-entry.ejs', {
            title: "Welcome to HealthShare | Add a new entry"
            ,message: ''
        });
    },
    addEntry: (req, res) => {
        let entryId = req.params.id;
        let illness = req.params.illness;
        let illness_start = req.body.illness_start;
        let action_categorie = req.body.action_categorie;
        let action_name = req.body.action_name;
        let action_application = req.body.action_application;
        let action_dose = req.body.action_dose;
        let action_start = req.body.action_start;
        let improvement = req.body.improvement;
        let improvement_start = req.body.improvement_start;
        let relevant_infos = req.body.relevant_infos;
        let further_infos = req.body.further_infos;
        let gender = req.body.gender;
        let age = req.body.age;

        let entryQuery = "SELECT * FROM `JESSI1` WHERE illness = '" + illness + "'";

        db.query(entryQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Entry already exists';
                res.render('add-entry.ejs', {
                    message,
                    title: "Welcome to HealthShare | Add a new entry"
                });
            } else {
                // send the entries's details to the database
                let query = "INSERT INTO `JESSI1` (illness, illness_start, action_categorie, action_name, action_application, action_dose, action_start, improvement, improvement_start, relevant_infos, further_infos, gender, age) VALUES ('" +
                    illness + "', '" +  illness_start + "', '" +  action_categorie + "', '" +  action_name + "', '" +
                    action_application + "', '" +  action_dose + "', '" +  action_start + "', '" +  improvement + "', '" +
                    improvement_start + "', '" +  relevant_infos + "', '" +  further_infos + "', '" +  gender + "', '" +  age+ "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
                
            }
        });
    },
    editEntryPage: (req, res) => {
        let entryId = req.params.id;
        let query = "SELECT * FROM `JESSI1` WHERE id = '" + entryId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-entry.ejs', {
                title: "Edit  Entry"
                ,entry: result[0]
                ,message: ''
            });
        });
    },
    editEntry: (req, res) => {
        let entryId = req.params.id;
        let illness = req.params.illness;
        let illness_start = req.body.illness_start;
        let action_categorie = req.body.action_categorie;
        let action_name = req.body.action_name;
        let action_application = req.body.action_application;
        let action_dose = req.body.action_dose;
        let action_start = req.body.action_start;
        let improvement = req.body.improvement;
        let improvement_start = req.body.improvement_start;
        let relevant_infos = req.body.relevant_infos;
        let further_infos = req.body.further_infos;
        let gender = req.body.gender;
        let age = req.body.age;

        let query = "UPDATE `JESSI1` SET `illness` = '" + illness + "', " +
            "`illness_start` = '" + illness_start + "', " +
            "`action_categorie` = '" + action_categorie + "', " +
            "`action_name` = '" + action_name + "', " +
            "`action_application` = '" + action_application + "', " +
            "`action_dose` = '" + action_dose + "', " +
            "`action_start` = '" + action_start + "', " +
            "`improvement` = '" + improvement + "', " +
            "`improvement_start` = '" + improvement_start + "', " +
            "`relevant_infos` = '" + relevant_infos + "', " +
            "`further_infos` = '" + further_infos + "', " +
            "`gender` = '" + gender + "', " +
            "`age` = '" + age + "' WHERE `entries`.`id` = '" + entryId + "'";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteEntry: (req, res) => {
        let entryId = req.params.id;
        let deleteEntryQuery = 'DELETE FROM JESSI1 WHERE id = "' + entryId + '"';

        db.query(deleteEntryQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    }
};


