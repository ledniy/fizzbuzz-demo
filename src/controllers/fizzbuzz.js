module.exports = (service) => ({
  post(req, res) {
    const { count } = req.body;

    const response = service.createList(count);
  
    res.json({
      response,
      error: null
    })
  }
})
