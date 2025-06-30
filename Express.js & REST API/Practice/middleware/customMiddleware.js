const custom = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  req.requestTime = timeStamp;
  console.log('testing custom logger');
  console.log(`Request received at ${ts}`);
  next();
};

module.exports = custom;