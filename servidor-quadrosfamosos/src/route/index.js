const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "As 10 obras-de-arte mais importantes da história!",
        data: "20/09/2020"
    })
})

module.exports = router;