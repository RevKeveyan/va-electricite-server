const express = require("express");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const fileMiddleware = require("../middlewares/fileMiddleware");
const router = express.Router();
const SkillController = require("../controllers/skillController") 


router.get("/", SkillController.getAll);
router.get("/:id", SkillController.getById);
router.post("/", authMiddleware, fileMiddleware.single("image"), SkillController.add);
router.patch("/:id",authMiddleware, fileMiddleware.single("image"), SkillController.update);
router.delete("/:id",authMiddleware, SkillController.delete);



const skillRouter = express.Router();
skillRouter.use("/skills", router);

module.exports = skillRouter;
