module.exports = {
  notFound: (req, res, next) => res.status(404).send('Not found'),
  notImplemented: (req, res, next) => res.status(405).send('Not implemented'),
}
