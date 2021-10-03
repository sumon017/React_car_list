import React from 'react';
import propTypes from 'prop-types';

function TextField({name,label,type="text",placeholder,value,onChange,error}) {
    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                className={error ? 'form-control is-invalid':"form-control"}
                name={name}
                placeholder={placeholder}
                id={name}
                value={value}
                onChange={onChange}
            />

        </div>
    );
};

TextField.propTypes = {
       name:propTypes.string.isRequired,
       label:propTypes.string,
       type:propTypes.string,
       placeholder:propTypes.string.isRequired,
       value:propTypes.string,
       onChange:propTypes.func,
       error:propTypes.string,
        }

export default TextField;






