import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Manish</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className='footer__link'>Testimonials</a>
                </li>

            </ul>

        <div className="footer__social">


         <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/manish_g30/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/manish-goyal-8253a61aa/" className="footer__social-link" target='_blank'>
        <i class="bx bxl-linkedin"></i>
        </a>

        <a href="https://twitter.com/Manish_goyal30" className="footer__social-link" target='_blank'>
        <i class="bx bxl-twitter"></i>
        </a>


        <a href="https://dribbble.com/manish_g30" className="footer__social-link" target='_blank'>
        <i class="bx bxl-dribbble"></i>
        </a>

        <a href="https://www.behance.net/manishgoyal4" className="footer__social-link" target='_blank'>
        <i class="bx bxl-behance"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; Manish Goyal. All rights Reserved</span>
        </div>
    </footer>
    
  )
}

export default Footer