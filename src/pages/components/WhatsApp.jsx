import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=I want to enquire 200Travel`;
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
    <button className="fixed bottom-4 left-4 flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg">
      <FaWhatsapp className="mr-2" />
      Message on WhatsApp
    </button>
  </a>
  );
};

export default WhatsAppButton;