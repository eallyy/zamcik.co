'use client'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaArrowTrendDown } from 'react-icons/fa6';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [olurumTurkiyem, setOlurumTurkiyem] = useState(null);
  const [zamButton, setZamButton] = useState(null);
  const zamAlerts = [
    'Zamcık yollandı! Yarın haberlerde görüsün.',
    'Tebrikler! Ülkenin zamına koydun.',
    'Z A M C I K L A D I N I Z !',
    'Oh ne güzel. Bir zam da sen koydun.',
    'Zamla beni zumla beni koy bir zamcık da sen yar.'
  ];
  const zamButtons = [
    'Zamcıkla',
    'Zamına Koy',
    'ZAM-K'
  ];

  const initializeOlurumTurkiyem = () => {
    let olurumTurkiyem = new Audio('olurum_turkiyem.mp3');
    setOlurumTurkiyem(olurumTurkiyem);
  };

  useEffect(() => {
    setTimeout(() => {
      initializeOlurumTurkiyem();
      let zamButtonIndex = Math.floor(Math.random() * zamButtons.length);
      setZamButton(zamButtons[zamButtonIndex]);
    }, 1000)
  }, []);

  const handleZamClick = () => {
    olurumTurkiyem.currentTime = 0;
    olurumTurkiyem.play();

    let zamAlertIndex = Math.floor(Math.random() * zamAlerts.length);
    toast.error(zamAlerts[zamAlertIndex], {
      position: 'top-center',
      autoClose: 7000,
      pauseOnHover: false,
      closeButton: false,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      closeOnClick: false,
      hideProgressBar: true,
      icon: <FaArrowTrendDown />
    });
  };

  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <img src="/turkey_flag.svg" alt="Turkey Logo" className={`w-64 h-64 transition-opacity ${!zamButton ? 'opacity-0' : 'opacity-100'}`} />
      <button
        className={`rounded-md bg-transparent text-white px-12 py-3 hover:bg-white hover:text-black border-2 border-white transition-opacity ${!zamButton ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleZamClick}
      >
        {zamButton}
      </button>
      <ToastContainer limit={3} newestOnTop={true} />
    </div>
  );
}
