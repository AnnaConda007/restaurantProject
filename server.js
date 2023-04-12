const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sendmail", async (req, res) => {
  try {
    const { htmlContent } = req.body;

    // Настройте параметры отправки электронной почты
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: "annahrulkova@yandex.ru",
        pass: "an1961034",
      },
    });

    const mailOptions = {
      from: "annahrulckova@yandex.ru",
      to: "hrulckovaa@yandex.ru",
      subject: "Новый заказ",
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);

    if (result) {
      res.status(200).json({ message: "Письмо успешно отправлено" });
    } else {
      res.status(500).json({ message: "Ошибка отправки" });
    }
  } catch (error) {
    console.error("Ошибка отправки:", error);
    res.status(500).json({ message: "Ошибка отправки" });
  }
});

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
