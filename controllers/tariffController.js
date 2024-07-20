const BaseController = require("./baseController");
const Tariff = require("../models/tariff"); 

class TariffController extends BaseController {
  constructor(Tariff) {
    super(Tariff);
  }
}

module.exports = new TariffController(Tariff);