const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        'status' : true,
        'message': 'user get',
    })
})

router.post('/', (req, res) => {
    res.json({
        'status' : true,
        'message': 'user post',
    })
})


module.exports = router