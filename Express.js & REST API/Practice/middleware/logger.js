const logger = (req, res, next) => {
  const now = new Date().toISOString();
  console.log('testing logger');
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
