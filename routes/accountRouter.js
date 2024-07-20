const express = require("express");
const fileMiddleware = require("../middlewares/fileMiddleware");
const router = express.Router();
const AccountController = require("../controllers/accountController");
const { authMiddleware } = require("../middlewares/AuthMiddleware");

router.post("/:id",authMiddleware, fileMiddleware.single("image"), AccountController.update);

const accountRouter = express.Router();
accountRouter.use("/account", router);

module.exports = accountRouter;
