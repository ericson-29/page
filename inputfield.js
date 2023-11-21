// InputField.js
import React from 'react';
import { inputFieldStyle } from './style';


const InputField = ({ label, type = 'text' }) => {
  return (
    <div style={inputFieldStyle}>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default InputField;