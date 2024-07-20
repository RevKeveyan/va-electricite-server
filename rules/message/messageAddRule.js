const { body, validationResult } = require("express-validator");

const messageValidation = [
  body("contactInfo.name").notEmpty().isString().withMessage("Nom requise"),
  body("contactInfo.email").notEmpty().isEmail().withMessage("L'e-mail requis doit être valide"),
  body("contactInfo.phone").notEmpty().isMobilePhone().withMessage("Le numéro de téléphone requis doit être valide"),
  body("title").notEmpty().isString().withMessage("Titre requise"),
  body("message").notEmpty().isString().withMessage("Message requise"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = messageValidation;