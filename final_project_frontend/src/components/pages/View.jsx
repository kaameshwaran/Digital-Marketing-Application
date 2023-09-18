import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './View.css';

const View = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [id, setId] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewUser', {
        params: {
          id: id,
        },
      });

      if (response.status === 200) {
        setFetchedData(response.data);
        console.log(fetchedData);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('userData');
    setId(data);
    fetchData();
  }, [id]);

  return (
    <div className="view">
      <div className="view-container">
        <h1>Order Preview</h1>
        {fetchedData ? (
         <div className="form-container1">
         <div className="form-group1">
           <span className="label">Company Name :</span>
           <span className="data">{fetchedData.company.companyName}</span>
         </div>
       
         <div className="form-group1">
           <span className="label">Request :</span>
           <span className="data">{fetchedData.company.request}</span>
         </div>
       
         <div className="form-group1">
           <span className="label">Tagline :</span>
           <span className="data">{fetchedData.company.tagline}</span>
         </div>
       
         <div className="form-group1">
           <span className="label">Contact No :</span>
           <span className="data">{fetchedData.company.contactNo}</span>
         </div>
       
         <div className="form-group1">
           <span className="label">Company Revenue :</span>
           <span className="data">{fetchedData.company.companyRevenue}</span>
         </div>
       
         <div className="form-group1">
           <span className="label">Ads:</span>
           <ul>
             {fetchedData.adl.map((ad, adIndex) => (
               <ul key={adIndex}>
                 <span className="label">Product:</span> 
                 <span className="data">{ad.product},</span> 
                 <span className="label">Ad Type:</span> 
                 <span className="data">{ad.adType}, </span>
                 <span className="label">Ad Duration:</span>
                 <span className='data'> {ad.adDuration}, </span>
                 <span className="label">Ad Platform:</span>
                 <span className='data'> {ad.adPlatform}, </span>
                 <span className="label">Membership:</span> 
                 <span className="data">{ad.membership}</span>
               </ul>
             ))}
           </ul>
         </div>
       </div>       
        ) : (
          <p>No order data available</p>
        )}

        <div className="button-container">
          <Link to="/success">
            <button className="confirm-button">Confirm Order</button>
          </Link>

          <Link to="/forms">
            <button className="go-back-button">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
