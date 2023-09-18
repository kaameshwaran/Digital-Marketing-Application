import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Forms.css'
import { useNavigate } from 'react-router-dom';

function Forms() {
  const [companyName, setCompanyName] = useState('');
  const [request, setRequest] = useState('');
  const [tagline, setTagline] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [companyRevenue, setCompanyRevenue] = useState('');
  const [additionalFields, setAdditionalFields] = useState([
    {
      product: '',
      adType: '',
      adDuration: '',
      adPlatform: '',
      membership: '',
    },
  ]);
  const [errorVisible, setErrorVisible] = useState(false);
  const [customErrorMessage, setCustomErrorMessage] = useState('');
  const [redirectToContact, setRedirectToContact] = useState(false);
  const navigate = useNavigate();
  const [userData,setUserData]  = useState();


  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleRequestChange = (e) => {
    setRequest(e.target.value);
  };

  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handleCompanyRevenue = (e) => {
    setCompanyRevenue(e.target.value);
  };

  const handleAdditionalFieldChange = (index, field, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index][field] = value;
    setAdditionalFields(updatedFields);
  };

  const handleAddAnother = () => {
    const anyEmptyField = additionalFields.some((field) =>
      Object.values(field).some((value) => value === '')
    );

    if (anyEmptyField) {
      setErrorVisible(true);
      setCustomErrorMessage('Fill the required fields.');
    } else if (additionalFields.length >= 3) {
      setErrorVisible(true);
      setCustomErrorMessage('For more than 3 Ads, contact us.');
    } else {
      setAdditionalFields([
        ...additionalFields,
        { product: '', adType: '', adDuration: '', adPlatform: '', membership: '' },
      ]);
      setErrorVisible(false);
      setCustomErrorMessage('');
    }
  };

  const handleRemove = (index) => {
    const updatedFields = [...additionalFields];
    updatedFields.splice(index, 1);
    setAdditionalFields(updatedFields);
  };

  const handleYesRedirect = () => {
    setRedirectToContact(true);
    setErrorVisible(false);
    navigate('/contact');
  };

  const handleNoStay = () => {
    setErrorVisible(false);
  };
  useEffect(() => {
    const user =localStorage.getItem('userData');
    setUserData(user);
  },[userData]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (redirectToContact) {
      navigate('/contact');
      return;
    }
    const formData = {
      userId : userData,
      company: {
        companyName: companyName,
        request: request,
        tagline: tagline,
        contactNo: contactNo,
        companyRevenue: companyRevenue,
      },
      adl: additionalFields,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    try {
      const response = await axios.put('http://localhost:8080/updateUser', formData);

      if (response.status === 200) {
        console.log('Request sent successfully');
        navigate('/view');
      } else {
        console.error('Failed to send request');
        navigate('/failed')
      }
    } catch (error) {
      console.error('An error occurred:', error);
      navigate('/failed')
    }
  };

  return (
    <div className='form-container'>
      <h1 className='form-title'>PROMOTE YOUR PRODUCTS</h1>
      <section className='form-section'>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='companyName'>Company Name:</label>
              <input
                id='companyName'
                className='form-input'
                name='companyName'
                type='text'
                placeholder='Enter your company name'
                value={companyName}
                onChange={handleCompanyNameChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='contactNo'>Contact Number:</label>
              <input
                id='contactNo'
                className='form-input'
                name='contactNo'
                type='text'
                placeholder='Enter your contact number'
                value={contactNo}
                onChange={handleContactNoChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='request'>Request:</label>
              <textarea
                id='request'
                className='form-textarea'
                name='request'
                placeholder='Enter your request'
                value={request}
                onChange={handleRequestChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='tagline'>Tagline:</label>
              <input
                id='tagline'
                className='form-input'
                name='tagline'
                type='text'
                placeholder='Enter your tagline'
                value={tagline}
                onChange={handleTaglineChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='companyRevenue'>Company Revenue:</label>
              <input
                id='companyRevenue'
                className='form-input'
                name='companyRevenue'
                type='text'
                placeholder='Enter company revenue'
                value={companyRevenue}
                onChange={handleCompanyRevenue}
              />
            </div>

            {additionalFields.map((field, index) => (
              <div key={index} className='additional-fields'>
                <label htmlFor={`product${index}`}>Product:</label>
                <input
                  id={`product${index}`}
                  className='form-input'
                  name={`product${index}`}
                  type='text'
                  placeholder='Enter product'
                  value={field.product}
                  onChange={(e) => handleAdditionalFieldChange(index, 'product', e.target.value)}
                />
                <label htmlFor={`adType${index}`}>Advertisement Type:</label>
                <input
                  id={`adType${index}`}
                  className='form-input'
                  name={`adType${index}`}
                  type='text'
                  placeholder='Enter advertisement type'
                  value={field.adType}
                  onChange={(e) => handleAdditionalFieldChange(index, 'adType', e.target.value)}
                />
                <label htmlFor={`adDuration${index}`}>Advertisement Duration:</label>
                <input
                  id={`adDuration${index}`}
                  className='form-input'
                  name={`adDuration${index}`}
                  type='text'
                  placeholder='Enter advertisement duration'
                  value={field.adDuration}
                  onChange={(e) => handleAdditionalFieldChange(index, 'adDuration', e.target.value)}
                />
                <label htmlFor={`adPlatform${index}`}>Advertisement Platform:</label>
                <input
                  id={`adPlatform${index}`}
                  className='form-input'
                  name={`adPlatform${index}`}
                  type='text'
                  placeholder='Enter advertisement platform'
                  value={field.adPlatform}
                  onChange={(e) => handleAdditionalFieldChange(index, 'adPlatform', e.target.value)}
                />
                <label htmlFor={`membership${index}`}>Membership:</label>
                <input
                  id={`membership${index}`}
                  className='form-input'
                  name={`membership${index}`}
                  type='text'
                  placeholder='Enter membership'
                  value={field.membership}
                  onChange={(e) => handleAdditionalFieldChange(index, 'membership', e.target.value)}
                />
                {index > 0 && (
                <button
                  type='button'
                  onClick={() => handleRemove(index)}
                  className='btn-remove'
                >
                  Remove
                </button>
                )}
              </div>
            ))}

            {errorVisible && (
              <div className='error-message' style={{ color: 'red' }}>
                {customErrorMessage}
                {customErrorMessage === 'For more than 3 Ads, contact us.' && (
                  <div>
                    <button className='btn1' onClick={handleYesRedirect}>
                      Yes
                    </button>
                    <button className='btn1' onClick={handleNoStay}>
                      No
                    </button>
                  </div>
                )}
              </div>
            )}

            <button className='btn1' type='button' onClick={handleAddAnother}>
              Add Another
            </button>

            <button className='btn1-submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Forms;
