const shortid = require('shortid')
const ShortUrl = require('../models/shortUrl')
const baseUrl = 'http://localhost:5000/'

const isValidURL = (string) => {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  )
  return res !== null
}

const createUrl = async (req, res) => {
  try {
    const { fullUrl, domainUrl } = req.body

    if (!isValidURL(fullUrl)) {
      return res.status(400).json({
        message: 'Неккоректная ссылка',
      })
    }

    const code = shortid.generate()
    const shortUrl = baseUrl + domainUrl + '/' + code
    const doc = new ShortUrl({
      full: fullUrl,
      short: shortUrl,
      code: code,
      domain: domainUrl,
    })

    await doc.save()
    res.json(doc)
  } catch (error) {
    console.log(error)
  }
}

const getUrls = async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find()
    res.json(shortUrls)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createUrl,
  getUrls,
}
