import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="footer-basic">
            <footer>
                <br />
                <br />
                <div class="social">
                    <a href="https://www.instagram.com/raja__hunnur/" target="_blank"><i class="icon ion-social-instagram"></i></a>
                    <a href="https://github.com/hunnurjirao" target="_blank"><i class="icon ion-social-github"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+919182530027" target="_blank"><i class="icon ion-social-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCJ58XYpCLKXPAjnLvO6CUlw" target="_blank"><i class="icon ion-social-youtube"></i></a>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item"><NavLink to="/index">Home</NavLink></li>
                    <li class="list-inline-item"><NavLink to="/index/mlproj">Projects</NavLink></li>
                    <li class="list-inline-item"><NavLink to="/index/contactUs">Contact Us</NavLink></li>

                </ul>
                <p class="copyright">&#169;Copyright 2022 K HUNNURJI RAO. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer