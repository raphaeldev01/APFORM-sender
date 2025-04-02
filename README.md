# API de Envio de E-mails

Esta API permite o envio de e-mails a partir de um formulário, utilizando **Node.js** e um serviço de e-mail como **SMTP** (Gmail, SendGrid, Mailgun, etc.).

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Nodemailer**
- **Dotenv**

## 📤 Uso

### URL
```
https://apform.vercel.app/
```

### **Endpoint: Enviar E-mail**

- **URL:** `/send/email`
- **Método:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Nome do usuário",
    "email": "email@exemplo.com",,
    "subject": "Example",
    "message": "Mensagem a ser enviada"
  }
  ```

### **Exemplo de Resposta**

```json
{
  "error": false,
  "message": "E-mail enviado com sucesso!"
}
```

## 📜 Licença

Este projeto está sob a licença **MIT**.

