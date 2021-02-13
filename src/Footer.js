import React from 'react';
import "./Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloudIcon from '@material-ui/icons/Cloud';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>&copy; B3U Production</p>
            </div>
            <div className="footer__center">
                <div className="footer__link">
                    <a id="Insta" href="https://www.instagram.com/b3u_recordings/" target="_blank">
                        <InstagramIcon />
                        <p>Instagram</p>
                    </a>
                </div>
                <div className="footer__link">
                    <a id="YouTube" href="https://www.youtube.com/channel/UC-FV2VekZ-VKazf559U2BFg" target="_blank">
                        <YouTubeIcon />
                        <p>YouTube</p>
                    </a>
                </div>
                <div className="footer__link">
                    <a id="SoundCloud" href="https://soundcloud.com/b3u_recordings" target="_blank">
                        <CloudIcon />
                        <p>SoundCloud</p>
                    </a>
                </div>
            </div>
            <div className="footer__right">
                <p>Created And Designd By:</p>
                <p>Goran Stefanovski - Tevidma</p>
            </div>
        </div>
    )
}

export default Footer
