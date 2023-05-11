const handleError = (err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong' }).send();
};

module.exports = handleError;
