class BaseController {
  constructor(model) {
    this.BaseModel = model;
  }

  getAll = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const type = req.query.type;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
      const totalCount = await this.BaseModel.countDocuments({ type: type, deletedAt: null });
      const totalPages = Math.ceil(totalCount / limit);
      const items = await this.BaseModel
        .find({ type: type, deletedAt: null }) 
        .skip(skip)
        .limit(limit);
      return res.status(200).json({ items, totalPages });
    } catch (error) {
      return res.status(500).send("Error getting items");
    }
  };

  getById = async (req, res) => {
    try {
      const itemId = req.params.id;
      const item = await this.BaseModel.findById({ _id: itemId });
      if (!item) {
        return res.status(404).send("Item not found");
      } else {
        return res.status(200).json(item);
      }
    } catch (error) {
      return res.status(500).send("Error getting item");
    }
  };

  add = async (req, res) => {
    try {
      const data = req.body;
      data.image = req.file ? req.file.path.slice(14) : null;
      if (!data.image) {
        return res.status(500).json({ message: "Image requise" });
      }
      const creationDate = new Date();
      data.createdAt = creationDate;

      const newModel = new this.BaseModel(data);
      await newModel.save();

      return res.status(201).json({ message: "Ajouté" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erreur de serveur" });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const  data = req.body;
      if (req.file) {
        data.image = req.file.path.slice(14);
      }
      const updatedDate = new Date();
      data.updatedAt = updatedDate;

      const updatedData = await this.BaseModel.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      );

      if (!updatedData) {
        return res.status(404).json({ message: "Non trouvé" });
      }

      return res.status(200).json({data, message: "Mis à jour" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erreur de serveur" });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deletionDate = new Date();
      const deletedData = await this.BaseModel.findByIdAndUpdate(
        { _id: id },
        { deletedAt: deletionDate },
        { new: true }
      );

      if (!deletedData) {
        return res.status(404).json({ message: "Non trouvé" });
      }

      return res.status(200).json({ message: "Supprimé" });
    } catch (error) {
      return res.status(500).json({ message: "Erreur de serveur" });
    }
  };
}

module.exports = BaseController;
