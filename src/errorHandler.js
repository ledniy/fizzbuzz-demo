const { isCelebrateError } = require("celebrate");

module.exports = (error, req, res, next) => {
  let statusCode = 500;
  let details;
  if (isCelebrateError(error)) {
    statusCode = 400;
    details = {};
    for (const [segment, joiError] of error.details.entries()) {
      details[segment] = joiError.message;
    }
  }

  res.status(statusCode).json({
    response: null,
    error: error.message,
    details
  });
};
