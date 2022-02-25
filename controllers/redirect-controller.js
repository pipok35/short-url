const shortid = require('shortid')
const ShortUrl = require('../models/shortUrl')

const redirectFunc = async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({
      code: req.params.code,
      domain: req.params.domain,
    })
    if (shortUrl == null) return res.status(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { redirectFunc }
