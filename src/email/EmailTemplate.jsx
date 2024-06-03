let EmailTemplate = ({code}) =>{
    return(
        <div>
             <h1 style="color: #333;">Hello, Recipient Name!</h1>
    <p>Thank you for registering with us. We are excited to have you on board!</p>
    <p>Please click the link below to verify your email address and complete your registration:</p>
    <p>
      <a href="https://mern-travel-client.vercel.app/login" 
         style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">
        Confirm This Mail By Logging in
      </a>
    </p>
    <h2>Code :  {code}</h2>
    <p>Thank you,<br/>MERN Service Team</p>
        </div>
    )
}
export default EmailTemplate;