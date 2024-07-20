const express = require("express");
const authMiddleware = require("../middlewares/AuthMiddleware");
const router = express.Router();
const MessageController = require("../controllers/messageController") 


router.post("/", MessageController.sendMessage);




const messageRouter = express.Router();
messageRouter.use("/messages", router);

module.exports = messageRouter;
