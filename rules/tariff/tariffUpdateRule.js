const { body, validationResult } = require("express-validator");

const tariffAddValidation = [
  body("title").optional().isString(),
  body("price").optional().isNumeric(),
  body("description").optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = tariffAddValidation;