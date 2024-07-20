const express = require("express");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const fileMiddleware = require("../middlewares/fileMiddleware");
const { checkUserRoleAdmin } = require("../middlewares/AdminMiddleware");

const UserController = require("../controllers/userController")
const router = express.Router();

router.get("/", authMiddleware, checkUserRoleAdmin, UserController.getAll);
router.get("/:id",authMiddleware, checkUserRoleAdmin,  UserController.getById);
router.post("/",authMiddleware, checkUserRoleAdmin, fileMiddleware.single("image"), UserController.add);
router.patch("/:id",authMiddleware, checkUserRoleAdmin,  fileMiddleware.single("image"), UserController.update);
router.delete("/:id",authMiddleware, checkUserRoleAdmin,  UserController.delete);



const userRouter = express.Router();
userRouter.use("/users", router);

module.exports = userRouter;
