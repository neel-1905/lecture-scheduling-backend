const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("token");

  if (!token) {
    return res
      .status(401)
      .json({ message: "You are not authorized", isSuccess: false });
  }

  try {
    const verified = jwt.verify(token, "averysecretkey");
    //   if (!verified) {
    //     return res.status(403).json({ message: "Forbidden", isSuccess: false });
    //   }
    req.user = verified;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Forbidden", isSuccess: false, error: error.message });
  }
};

module.exports = { verifyToken };
