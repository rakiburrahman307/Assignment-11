
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TostMessage = (message) => {
  toast(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export default TostMessage;