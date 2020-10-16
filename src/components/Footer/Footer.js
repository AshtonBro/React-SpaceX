import React from 'react';
import logo from '../../logo.svg';
import './footer.css';

const Footer = ({links , summary }) => (
    <footer className="footer">
        <img src={logo} alt="logo Space X" className="logo"/>
            <nav className="footer-nav">
                <ul className="list">
                    <li className="item">
                        <a href={links.elon_twitter}
                        rel="noopener noreferrer" 
                        target='_blank' 
                        className="item-link">Elon Musk Twitter</a></li>
                    <li className="item">
                        <a href={links.twitter}
                        rel="noopener noreferrer" 
                        target='_blank' 
                        className="item-link">Twitter</a></li>
                    <li className="item">
                        <a href={links.flickr}
                        rel="noopener noreferrer" 
                        target='_blank' 
                        className="item-link">Flickr</a></li>
                    <li className="item">
                        <a href={links.website}
                        rel="noopener noreferrer" 
                        target='_blank' 
                        className="item-link">Website</a></li>
                </ul>
            </nav>
            <p className="footer-text">
                {summary}
            </p>
    </footer>
);

export default Footer;