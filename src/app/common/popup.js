import { useEffect, useState } from "react";

export const Popup = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 left-0 bg-green-500 w-full h-20 text-xl pt-5 text-center text-white px-4 py-2 rounded-md transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};
