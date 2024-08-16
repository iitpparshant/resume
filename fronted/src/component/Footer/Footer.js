import React from 'react';
import './Footer.css';
import logo from '../assets/images.png'; // adjust the path to your logo image
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Resume Maker Logo" />
                </div>
                <div className="footer-links">
                    <a href="/about-us">About Us</a>
                    <a href="/contact-us">Contact Us</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/faq">FAQ</a>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <div className="footer-newsletter">
                    <form action="/subscribe" method="post">
                        <label htmlFor="newsletter-email">Subscribe to our newsletter</label>
                        <input type="email" id="newsletter-email" name="email" placeholder="Your email address" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 Resume Maker. All rights reserved.</p>
                </div>
        </footer>
    );
};

export default Footer;
