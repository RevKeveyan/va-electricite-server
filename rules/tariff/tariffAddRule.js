const { body, validationResult } = require("express-validator");

const tariffAddValidation = [
  body("title").notEmpty().isString().withMessage("Titre requise"),
  body("price").notEmpty().isNumeric().withMessage("Prix requis doit être un nombre"),
  body("type").notEmpty().isString("Type requise"),
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