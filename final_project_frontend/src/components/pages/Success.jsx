import React, {useState} from 'react';
import './Success.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessPopup from '../Popup';

function Success() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem('userData');
    
    try {
      const response = await axios.delete('http://localhost:8080/deleteAd',{
        params : {
          id:id,
        }
      });
      if(response.status === 200){
        setShowPopup(true);
        console.log("cancelled successfully");
      }else{
        console.log("couldn't cancel");
      }
    } catch (error) {
      console.log('error : '+error);
    }
  }

  const closePopup = () => {
    setShowPopup(false); 
    navigate('/home'); 
  };

  return (
    <div className='success'>
    <div className="container">
      <div className='group'>
        <div className="success-icon">✔</div>
        <p className='text-overlay1'>Success</p>
        <button className="cancel-button" onClick={handleCancel}>Cancel Order</button>
      </div>
    </div>
    {showPopup && (
        <SuccessPopup
          message="Canceled successfully"
          onClose={closePopup} 
        />
      )}
    </div>
  );
}

export default Success;
