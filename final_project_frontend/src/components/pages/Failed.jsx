import React,{useEffect} from 'react';
import './Failed.css'; 
import { useNavigate } from 'react-router-dom';

function Failed() {
    const navigate = useNavigate();

    useEffect ( () => {
        setTimeout(() => {
            navigate('/home'); 
          }, 5000);
    },[navigate])
  return (
    <div className='failed'>
    <div className="failed-container">
      <div className='failed-group'>
        <div className="failed-icon">✖</div>
        <p className='text-overlay'>failed</p>
      </div>
    </div>
    </div>
  );
}

export default Failed;
