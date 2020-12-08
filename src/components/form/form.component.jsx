import React from 'react';

import './form.styles.css';

class Form extends React.Component {
    render() {
        return(
            <div className='form'>
                <h1>Let's talk</h1>
                <p>
                    To request a qoute or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
                </p>

                <form className='myForm'>
                
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name'/>

                    <label htmlFor="email">Your Email</label>
                    <input type="text" id='email'/>

                    <label htmlFor="message">Your Message</label>
                    <textarea id="message"  rows="7" placeholder='Type something if you want'></textarea>

                    <button>Send Message</button>
                </form>
            </div>
        )
    }
}

export default Form;