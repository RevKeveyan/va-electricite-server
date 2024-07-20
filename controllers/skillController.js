const BaseController = require("./baseController");
const Skill = require("../models/skill");

class SkillController extends BaseController {
  constructor(Model) {
    super(Model);
  }

}

module.exports = new SkillController(Skill);

