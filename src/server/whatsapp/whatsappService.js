import axios from 'axios';

const token = 'EAAHhnt9sBxoBOZCtKjtj0zXDDGZAuHIiO56L4HWALNf8Xhrlc6irZAxy9MIQrVDeeuXmzKI8dZCrXkx0NW0O3qQ16IIvwlZAVEYGqqZBeoTHElf8V5UKZABpyyDA9wOUEkIasJhkm9EmEzZCZC73Awp30XzjWFNgg4jUBaP8ivBm6tUPxs5jYKWPaC72gzAjkrDyGuEqeEkfZBVxCZC8RxsMgZDZD'; // Reemplaza con tu token de acceso
const phoneNumberId = '426270780570479'; // Reemplaza con tu ID de número de teléfono

export const sendWhatsAppMessages = async (numeros, mensaje) => {
  try {
    for (const numero of numeros) {
      await axios.post(
        `https://graph.facebook.com/v13.0/${phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: numero,
          text: { body: mensaje }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
    }
    return 'Mensajes enviados exitosamente';
  } catch (error) {
    console.error('Error enviando mensajes:', error);
    throw new Error('Hubo un error enviando los mensajes');
  }
};