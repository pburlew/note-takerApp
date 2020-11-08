var dbJson = require("../db/db.json");


module.exports = funtion(app) {
    app.get("/api/notes", function(req, res) {
        return res.json(dbJson);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        dbJson.push(newNote);

        fs.writeFile("../db/db.json", JSON.stringify(dbJson)