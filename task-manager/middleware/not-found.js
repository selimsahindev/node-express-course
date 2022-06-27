const notFound = (req, res) =>
    res.status(404).send('404. No signs of life here.')

module.exports = notFound
