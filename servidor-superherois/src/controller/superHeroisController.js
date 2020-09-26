const superHerois = require("../model/superHerois.json");
const getAll = (req, res) => {
    console.log(req.url);
    res.send(superHerois);
};

module.exports = {getAll};