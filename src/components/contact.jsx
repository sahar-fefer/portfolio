import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_56lr3eh', 'template_x4r5xea', e.target, "user_s4TwhJIxgZNXyXz3WcQwI")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }    

    return (
        <div id={'contact'} className={'container'}>
            <h1 className="header perfect-center">Contact</h1>
            <div className="container">
                <div className={'row align-items-center'}>
                    <div className={'col-sm-4 col-md ml-4 mr-4 ml-sm-0 mr-sm-0'}>
                        <h2>
                            IT WOULD BE A PLEASURE
                        </h2>
                        <h2>
                            IF YOU CONTACT ME
                        </h2>
                    </div>
                    <form className={'form col'} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name={'name'}
                            placeholder='Name' />
                        <input
                            type="phone"
                            name={'phone'}
                            placeholder='Phone'
                            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            />
                        <input
                            type="email"
                            name={'email'}
                            placeholder='Email' />
                        <textarea
                            type="text"
                            name={'message'}
                            placeholder='Your Message'
                            rows="6"
                            cols="50" />
                        <input type="submit" value="submit" className={'submit'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;