import React from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ CONTACT }) => {
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

    const {SECTION_TITLE, PARAGRAF1, PARAGRAF2, NAME, PHONE, EMAIL, MESSAGE, SUBMIT} = CONTACT;
    return (
        <div id={'contact'} className={'container'}>
            <h1 className="component-header">{SECTION_TITLE}</h1>
            <div className="container">
                <div className={'wrapper row align-items-center'}>
                    <div className={'col-md-4 col-lg ml-4 mr-4 ml-sm-0 mr-sm-0'}>
                        <h2>{PARAGRAF1}</h2>
                        <h2>{PARAGRAF2}</h2>
                    </div>
                    <form className={'form col'} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name={'name'}
                            placeholder={NAME} />
                        <input
                            type="phone"
                            name={'phone'}
                            placeholder={PHONE}
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        />
                        <input
                            type="email"
                            name={'email'}
                            placeholder={EMAIL} />
                        <textarea
                            type="text"
                            name={'message'}
                            placeholder={MESSAGE}
                            rows="6"
                            cols="50" />
                        <input type="submit" value={SUBMIT} className={'submit'}  />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;