export default (name, value, validations, ERRORS) => {
    const errors = [];
    
    if(validations.required && required(value)){
        errors.push(ERRORS[name]['required']);
    }

    if(validations.minLength && minLength(value, validations.minLength)){
        errors.push(ERRORS[name]['minLength']);
    }

    if(validations.pattern && pattern(value, validations.pattern)){
        errors.push(ERRORS[name]['pattern']);
    }

    return errors;
}

const required = value => !value;

const minLength = (value, min) => value.length < min;

const pattern = (value, pattern) => !pattern.test(value);