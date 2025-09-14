import React, { useState, useEffect } from "react";


const NotificationBanner = ({ message, storageKey = "seenNotificationBanner", style }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem(storageKey);
    setVisible(!hasSeen);
  }, [storageKey]);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(storageKey, "true");
  };

  if (!visible) return null;

  return (
    <div style={{
      background: "#ffeeba",
      color: "#856404",
      padding: "1rem",
      textAlign: "center",
      borderBottom: "1px solid #ffeeba",
      position: "relative",
      ...style
    }}>
      <span>{message}</span>
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          fontSize: "1.2rem",
          color: "#856404",
          cursor: "pointer"
        }}
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
};

export default NotificationBanner;
