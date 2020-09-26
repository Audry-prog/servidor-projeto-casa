const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Alguns super-heróis para os fãs de HQ!",
        data: "20/09/2020"
    })
})

module.exports = router;