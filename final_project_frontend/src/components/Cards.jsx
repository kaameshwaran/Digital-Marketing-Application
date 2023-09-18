import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards1'>
    <div className='titleCard'><h1>OUR AD PARTNERS</h1></div>
  <div className='cards__container'>
    <div className='cards__wrapper'>
      <ul className='cards__items'>
        <CardItem
          src='https://c0.wallpaperflare.com/preview/602/600/844/youtube-youtube-inc-youtube-logo.jpg' 
          text='Connect with us on Youtube'
          label='Facebook'
          path='https://www.facebook.com/YourPage'
        />
        <CardItem
          src='https://images.pexels.com/photos/17894357/pexels-photo-17894357/free-photo-of-hand-holding-a-smartphone-with-twitter-icon-on-screen-iphone-with-a-social-media-app-logo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with Twitter image URL
          text='Follow us on Twitter'
          label='Twitter'
          path='https://twitter.com/YourTwitterHandle' 
        />
      </ul>
      <ul className='cards__items'>
        <CardItem
          src='https://c1.wallpaperflare.com/preview/194/655/645/business-hands-instagram-iphone.jpg'
          text='Check out our Instagram'
          label='Instagram'
          path='https://www.instagram.com/YourInstagramHandle' 
        />
        <CardItem
          src='https://wallpaperaccess.com/full/2068758.jpg' 
          text='Connect with us on LinkedIn'
          label='LinkedIn'
          path='https://www.linkedin.com/in/YourLinkedInProfile'
        />
        <CardItem
          src='https://c4.wallpaperflare.com/wallpaper/870/502/429/facebook-social-network-letters-3d-wallpaper-preview.jpg' 
          label='Facebook'
          text = 'Connect with us on Facebook'
          path='https://www.facebook.com/YourPage'
        />
      </ul>
    </div>
  </div>
</div>

  );
}

export default Cards;
