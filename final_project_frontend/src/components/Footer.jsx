import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/home' className='social-logo'>
            DIGIX
            <i class="fa-solid fa-earth-americas"></i>
            </Link>
          </div>
          <small class='website-rights'>DIGIX © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href={"https://github.com/kaameshwaran"}
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href={"https://www.linkedin.com/in/kaameshwaran-v-b38442225/"}
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link instagram'
              href={"https://instagram.com/"}
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href={'https://twitter.com/'}
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
