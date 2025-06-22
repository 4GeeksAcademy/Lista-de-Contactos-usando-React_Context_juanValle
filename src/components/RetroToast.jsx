import React, { useEffect } from "react";
import "./retrotoast.css";

const RetroToast = ({ message, onClose, duration = 2000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div className="retro-toast">
      <span>{message}</span>
      <button className="retro-toast-close" onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default RetroToast;
