const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to: 'sales@baitsanape.tech',
    from: 'rainrock@baitsanape.tech', // Replace with your SendGrid verified sender
    subject,
    text,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});