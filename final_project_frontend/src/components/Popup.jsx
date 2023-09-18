import React, {useState} from 'react';
import './Popup.css'; 

function SuccessPopup({ message, onClose }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleButtonHover = () => {
      setIsHovered(true);
    };
  
    const handleButtonLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className="success-popup">
        <div
          className={`popup-content ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <p>{message}</p>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
}

export default SuccessPopup;
