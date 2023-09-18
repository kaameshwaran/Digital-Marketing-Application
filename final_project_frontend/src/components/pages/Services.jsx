import React from 'react';
import './Services.css';
import CardItem from '../CardItem';

function Services() {
  return (
    <div className='cards'>
  <h1>OUR SERVICES</h1>
  <div className='cards__container1'>
    <div className='cards__wrapper'>
      <ul className='cards__items'>
        <CardItem
          src='https://www.beyondyourbrand.co.uk/images/blogs/25-11-2022/ppc-image.jpg' 
          text='Pay-Per-Click (PPC) Advertising'
          label='Pay-Per-Click (PPC) Advertising'
          path='https://www.facebook.com/YourPage'
        />
        <CardItem
          src='https://img.freepik.com/premium-vector/seo-search-engine-optimization-minimal-flat-logo-vector-seo-logo-with-magnifying-glass-arrow_664675-1298.jpg' 
          text='Search Engine Optimization (SEO)'
          label='Search Engine Optimization (SEO)'
          path='https://twitter.com/YourTwitterHandle' 
        />
      </ul>
      <ul className='cards__items'>
        <CardItem
          src='https://e0.pxfuel.com/wallpapers/159/368/desktop-wallpaper-social-media-logos-3d-social-media-marketing.jpg'
          text='Social Media Marketing'
          label='Social Media Marketing'
          path='https://www.instagram.com/YourInstagramHandle' 
        />
        <CardItem
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbgIJyyHT_nauM9w7D7cyuR27j78b8zOa3EvXSAyXP_Gq49iplWznIdSp1JUEAod2JZY&usqp=CAU' 
          text='Content Marketing'
          label='Content Marketing'
          path='https://www.linkedin.com/in/YourLinkedInProfile'
        />
        <CardItem
          src='https://www.nicepng.com/png/detail/84-841150_email-marketing-mail-marketing-icon-png.png' 
          label='Email Marketing'
          text = 'Email Marketing'
          path='https://www.facebook.com/YourPage'
        />
      </ul>
    </div>
  </div>
</div>

  );
}

export default Services;
