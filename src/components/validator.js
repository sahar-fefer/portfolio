import translate from '../languages.json';

export default (name, value, validations, language) => {
    const errors = [];

    //required validation
    if(validations.required && required(value)){
        // const errors = [`${name} is required`];
        errors.push(translate[language]['CONTACT']['ERRORS'][name]['required']);
    }

    if(validations.minLength && minLength(value, validations.minLength)){
        errors.push(translate[language]['CONTACT']['ERRORS'][name]['minLength']);
    }

    if(validations.pattern && pattern(value, validations.pattern)){
        errors.push(translate[language]['CONTACT']['ERRORS'][name]['pattern']);
    }

    return errors;
}

const required = value => !value;

const minLength = (value, min) => value.length < min;

const pattern = (value, pattern) => !pattern.test(value);