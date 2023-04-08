const send = (dataOrder)=>{
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'yandex',
        auth: {
            user: 'annahrulckova@yandex.ru',
            pass: '*********'  /*дописать*/
        }
    });
    const mailOptions = {
        from: 'annahrulckova@yandex.ru',
        to: 'hrulckovaa@yandex.ru',
        subject: 'Subject of the email',
        text: `Поступил новый заказ: ${dataOrder}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default send   
