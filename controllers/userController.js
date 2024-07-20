const BaseController = require("./baseController");
const User = require("../models/user"); 

class UserController extends BaseController {
  constructor(User) {
    super(User);
  }
}

module.exports = new UserController(User);