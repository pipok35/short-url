const { Router } = require('express')
const router = Router()
const { redirectFunc } = require('../controllers/redirect-controller')

router.get('/:domain/:code', redirectFunc)

module.exports = router
