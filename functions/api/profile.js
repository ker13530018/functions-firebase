const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        'status' : true,
        'message': 'profile get',
    })
})

router.post('/', (req, res) => {
    res.json({
        'status' : true,
        'message': 'profile post',
    })
})


module.exports = router