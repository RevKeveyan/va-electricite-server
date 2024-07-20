const { body, validationResult } = require("express-validator");

const skillAddValidation = [
  body("title").optional().withMessage("Titre requise"),
  body("description").notEmpty().isString("Description requise"),
  body("type").notEmpty().isString("Type requise"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = skillAddValidation;