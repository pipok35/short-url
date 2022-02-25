const { Router } = require('express')
const router = Router()
const { createUrl, getUrls } = require('../controllers/url-controller')

router.post('/shortUrls', createUrl)

router.get('/', getUrls)

module.exports = router
