function authr(res, res, next) {
  if (!req.headers.authorization) {
    return res.status(200).json({
      message: "Usuario sin permisos",
    });
  }
  next();
}

module.exports = authr;
