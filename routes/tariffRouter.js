const express = require("express");
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const fileMiddleware = require("../middlewares/fileMiddleware");
const TariffController = require("../controllers/tariffController")
const router = express.Router();

router.get("/",  TariffController.getAll);
router.get("/:id",  TariffController.getById);
router.post("/",authMiddleware, fileMiddleware.single("image"), TariffController.add);
router.patch("/:id",authMiddleware,  fileMiddleware.single("image"), TariffController.update);
router.delete("/:id",authMiddleware,  TariffController.delete);



const tariffRouter = express.Router();
tariffRouter.use("/tariffs", router);

module.exports = tariffRouter;
