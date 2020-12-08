import React from 'react';

import './contact-details.styles.css';


// import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
// import { ReactComponent as InstagramLogo } from '../../assets/instagram.svg';
// import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';
// import { ReactComponent as PostLogo } from '../../assets/postman.svg';

class Contact extends React.Component {
    render() {
        return(
            <div className='contact-us'>
                
                <img className='top-img' src="https://img.icons8.com/clouds/100/000000/open-envelope.png"
                alt='envelope'
                />

                <ul>
                    <li><i class="fas fa-map-marker-alt"></i>151 New Park Ave, Hartford, CT 06105 United States</li>

                    <li><i class="fas fa-phone-alt"></i>+1 (203) 302-9645</li>
                    <li><i class="fas fa-envelope"></i>contact@inveritasoft.com</li>
                </ul>

                <div className='logos'>
                    <img src="https://img.icons8.com/ultraviolet/40/000000/facebook-new.png"/>
                    
                    <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                    
                    <img src="https://img.icons8.com/ultraviolet/48/000000/twitter-circled.png"/>
                </div>

            </div>
        )
    }
}

export default Contact;