import React from 'react';

const Contact = () => {
    return (
        <div id={'contact'} className={'container-fluid'}>
            <div className={'container'}>
                <div className={'row perfect-center'}>
                    <div className={'header col'}>
                        <h1>
                            IT WOULD BE A PLEASURE
                    </h1>
                        <h1>
                            IF YOU CONTACT ME
                    </h1>
                    </div>
                    <form className={'form col'}>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Name'
                            required />
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            placeholder='Phone'
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email'
                            required />
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            placeholder='Your Message'
                            rows="6"
                            cols="50"
                            required />
                        <input type="submit" value="Submit" className={'submit'} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;