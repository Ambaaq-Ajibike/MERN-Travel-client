let SendEmail = async (clientEmail, clientName, code) => {
  const url = 'https://api.sendinblue.com/v3/smtp/email';
  const apiKey = import.meta.env.VITE_SENDINBLUE_API_KEY; // Use the API key from environment variables
console.log(apiKey, "apiKey");
  const emailData = {
    sender: { email: 'contact@200travels.com', name: '200Travel' },
    to: [{ email: clientEmail, name: clientName }],
    subject: 'Welcome to 200 Travel!',
    htmlContent: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h1 style="color: #333;">Hello, ${clientName}!</h1>
          <p>Thank you for registering with us. We're excited to have you on board!</p>
          <p>Please click the link below to verify your email address and complete your registration:</p>
          <p>
            <a href="https://mern-travel-client.vercel.app/verifyemail" 
               style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">
              Verify Your Email
            </a>
          </p>
          <p>If the button above does not work, you can also copy and paste the following link into your browser:</p>
          <p>Verification Code: ${code}</p>
          <p>Thank you,<br>The Your Service Team</p>
        </body>
      </html>
    `
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(emailData)
    });

    const responseText = await response.text(); // Get the raw response text
    console.log(responseText); // Log the raw response text

    if (response.ok) {
      const responseData = await response.json();
      console.log('Email sent successfully:', responseData);
    } else {
      console.error('Error sending email:', responseText); // Log raw response text for errors
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default SendEmail;
