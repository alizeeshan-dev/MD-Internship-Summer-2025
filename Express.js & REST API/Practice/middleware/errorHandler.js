function error(err, req, res, next) {
  const status = err.status || 500;
  const payload = {
    status,
    message: err.message || 'Internal Server Error'
  };
  if (process.env.NODE_ENV === 'development') {
    payload.stack = err.stack;
  }
  res.status(status).json({ error: payload });
}

module.exports = error;
