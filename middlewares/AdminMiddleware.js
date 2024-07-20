exports.checkUserRoleAdmin = (req, res, next) => {
    const type = req.user.role;

    if (type === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized access" });
    }
};