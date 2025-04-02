const express= require('express');
const router = express.Router();

const sender = require('../functions/sendEmail.js')

router.post('/email', async (req, res) => {
    const { toEmail, name, subject, message, senderMail } = req.body;    

    if(!toEmail || !name || !subject || !message || !senderMail) {
        return res.status(400).json({ error: true, message: "please send: toEmal, name, subject, message, senderMail" });
    }

    const result = await sender.sendEmail(toEmail, name, subject, message, senderMail)

    if(result.error) {
        return res.status(500).json({ error: true, message: result.message });
    } else {
        return res.status(200).json({ error: false, info: result.info });
    }
})

module.exports = router;