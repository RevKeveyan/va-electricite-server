const BaseController = require("./baseController");
const User = require("../models/user");

class AccountController extends BaseController {
  constructor(User) {
    super(User);
  }

  
}

module.exports = new AccountController(User);

