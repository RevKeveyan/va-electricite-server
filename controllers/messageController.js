const BaseController = require("./baseController");
const Message = require("../models/message");
const { mailer } = require("../mailer/nodeMailer");

class MessageController extends BaseController {
  constructor(Message) {
    super(Message);
  }
  sendMessage = async (req, res) => {
    try {
      const data = req.body;
      const newModel = new Message(data);
      const message = {
        from: 'rkeveyan23@gmail.com', 
        to: req.body.email,
        subject: req.body.title,
        html: `
          <div style="background-color: #f4f4f4; padding: 20px;">
            <h2 style="color: #333;">Hello, Vardan Jan!</h2>
            <p style="color: #333;">You have received a message with the following details:</p>
            <p style="color: #333;">Email: ${req.body.email}</p>
            <p style="color: #333;">Phone: ${req.body.phone}</p>
            <p style="color: #333;">Message: ${req.body.message}</p>
            <p style="color: #333;">Thanks for your time.</p>
            <p style="color: #333;">Best regards,</p>
            <p style="color: #333;">VA-Electricite</p>
          </div>
        `,
      };
      mailer(message)
      await newModel.save();

      return res.status(201).json({ message: "Message envoyé. Nous vous répondrons au plus vite possible" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erreur de serveur" });
    }
  }
}

module.exports = new MessageController(Message);

