import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import validate from './validator';
import InputErrors from './inputErrors';

const Contact = ({ CONTACT }) => {
    const { SECTION_TITLE, PARAGRAF1, PARAGRAF2, NAME, EMAIL, MESSAGE, SUBMIT } = CONTACT;
    const [isSubmmited, setIsSubmmited] = useState({})
    const [values, setValues] = useState({
        name: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 3,
                pattern: /^[a-zא-תA-Z0-9!?/(). _%+-]*$/
            }
        },
        email: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 0,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
        },
        message: {
            value: '',
            errors: [],
            validations: {
                required: true,
                minLength: 10,
                pattern: /^[a-zא-תA-Z0-9!?/(). _%+-]*$/
            }
        }
    })
    const handleBlur = (e) => {
        const { name, value } = e.target;

        const errors = validate(name, value, values[name].validations);

        setValues({
            ...values,
            [name]: {
                ...values[name],
                value,
                errors
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        let isOK = true;
        
        const nameField = values['name'];
        const nameErrors = validate('name', nameField.value, nameField.validations);
        if (nameErrors.length) {
            isOK = false;
            console.log('nameErrors', nameErrors)
            setValues({
                ...values,
                ['name']: {
                    ...values['name'],
                    errors: nameErrors
                }
            })
        }

        const emailField = values['email'];
        const emailErrors = validate('email', emailField.value, emailField.validations);
        if (emailErrors.length) {
            isOK = false;
            console.log('emailErrors', emailErrors)
            setValues({
                ...values,
                ['email']: {
                    ...values['email'],
                    errors: emailErrors
                }
            })
        }

        const messageField = values['message'];
        const messageErrors = validate('message', messageField.value, messageField.validations);
        console.log('messageErrors', messageErrors)
        if (messageErrors.length) {
            isOK = false;
            setValues({
                ...values,
                ['message']: {
                    ...values['message'],
                    errors: messageErrors
                }
            })
        }

        if (isOK) {
            // emailjs.sendForm('service_56lr3eh', 'template_x4r5xea', e.target, "user_s4TwhJIxgZNXyXz3WcQwI")
            //     .then((result) => {
            //         console.log('result', result);
            //         setIsSubmmited(result)
            //     }, (error) => {
            //         console.log('error', error);
            //         setIsSubmmited(error)
            //     });
            setValues({
                ...values,
                ['name']: {
                    ...values['name'],
                    value: '',
                    error: []
                },
                ['email']: {
                    ...values['email'],
                    value: '',
                    error: []
                },
                ['message']: {
                    ...values['message'],
                    value: '',
                    error: []
                }
            });
            e.target.reset()
        }
    }

    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm('service_56lr3eh', 'template_x4r5xea', e.target, "user_s4TwhJIxgZNXyXz3WcQwI")
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset()
    // }

    console.log('values', values);
    // console.log('values[name]', values['name'].errors);
    // console.log('values[email]', values['email'].errors);
    // console.log('values.message', values.message.errors);
    return (
        <div id={'contact'}>
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%">
                <path d="M0 0 L50 100 L100 0 Z" fill="#e2e2e2" stroke="#e2e2e2"></path>
            </svg>
            <div className="container">
                <h1 className="component-header">{SECTION_TITLE}</h1>
                <div className="container">
                    <div className={'wrapper row align-items-center'}>
                        <div className={'col-md-4 col-lg ml-4 mr-4 ml-sm-0 mr-sm-0'}>
                            <h2>{PARAGRAF1}</h2>
                            <h2>{PARAGRAF2}</h2>
                        </div>
                        <form className={'form col'} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name={'name'}
                                // value={values['name'].value}
                                onBlur={handleBlur}
                                placeholder={NAME} />
                            {
                                values['name'].errors &&
                                // console.log('values[name].errors')
                                <InputErrors errors={values['name'].errors}></InputErrors>
                            }
                            <input
                                type="email"
                                name={'email'}
                                // value={values['email'].value}
                                onBlur={handleBlur}
                                placeholder={EMAIL} />
                            {
                                values.email.errors &&
                                // console.log(values['email'].errors)
                                <InputErrors errors={values['email'].errors}></InputErrors>
                            }
                            <textarea
                                type="text"
                                name={'message'}
                                // value={values['message'].value}
                                onBlur={handleBlur}
                                placeholder={MESSAGE}
                                rows="6"
                                cols="50" />
                            {
                                values['message'].errors &&
                                // console.log(values['message'].errors)
                                <InputErrors errors={values['message'].errors}></InputErrors>
                            }
                            <input type="submit" value={SUBMIT} className={'submit'} />
                        </form>
                    </div>
                    {
                        isSubmmited &&
                        <div>
                            Your message was sent successfully. Thanks!
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;