const express = require("express");
const fileMiddleware = require("../middlewares/fileMiddleware");
const router = express.Router();
const AuthController = require("../controllers/authController")

router.post("/login", AuthController.login);
router.get("/me", AuthController.getAuthenticatedUser);
router.post("/logout", AuthController.logout);

const authRouter = express.Router();
authRouter.use("/auth", router);

module.exports = authRouter;
