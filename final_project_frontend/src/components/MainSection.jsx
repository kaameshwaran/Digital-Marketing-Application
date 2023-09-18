import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  const onButtonClick = () => {
    fetch('Kaameshwaran_V_resume_.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Kaameshwaran_V_resume_.pdf';
            alink.click();
        })
    })
}
  return (
    <div className='hero-container'>
      <video src='/videos/video (2160p) (2).mp4' autoPlay loop muted />
      <h1>Hello!</h1>
      <p>WE ARE INDIA'S BEST</p>
      <p>DIGITAL MARKETING SERVICE PROVIDER</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <i className='fa-solid fa-phone' />  HIRE US
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
