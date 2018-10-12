function calc(req) {


    req.forEach(function(entry) {
        entry.improvement = (5 - entry.improvement)*25;
    });
    req.name= "test";
    return req;
};

module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT illness, action_categorie, action_name, count(*) as total, avg(improvement) as improvement FROM `JESSI1` GROUP By illness, action_categorie, action_name;"; // query database to get all the players
        
        // execute query
        db.query(query, (err, results) => {
            if (err) {
                res.redirect('/');
            }

            // group and calculate all entries together
            let result = calc(results);

            res.render('index.ejs', {
                title: "Willkommen",
                entries: result
            });
        });
    }
};


