const quadrosFamosos = require("../model/quadrosFamosos.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.send(quadrosFamosos);
};

const getById = (req, res) => {
    const id = req.params.id;
    res.send(quadrosFamosos.find((arte) => arte.id == id));
};

module.exports = {getAll, getById};