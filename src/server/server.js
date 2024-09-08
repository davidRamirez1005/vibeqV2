import express from 'express';
import bodyParser from 'body-parser';
import { sendWhatsAppMessages } from './whatsapp/whatsappService.js';

const app = express();
const port = 5174;

// Middleware
app.use(bodyParser.json());

// Ruta para enviar mensajes de WhatsApp
app.post('/api/send-whatsapp', async (req, res) => {
  const { numeros, mensaje } = req.body;

  try {
    const response = await sendWhatsAppMessages(numeros, mensaje);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});