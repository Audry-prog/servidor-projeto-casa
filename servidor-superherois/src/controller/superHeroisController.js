const superHerois = require("../model/superHerois.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.send(superHerois);
};

const getById = (req, res) => {
    const id = req.params.id;
    res.send(superHerois.find((heroi) => heroi.id == id));
};

module.exports = {getAll, getById};