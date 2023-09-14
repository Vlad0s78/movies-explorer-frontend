import React from "react";

function InputField({ label, type, name, placeholder, autocomplete, required, error, onChange, minLength, maxLength, value }) {
  return (
    <div className="auth__field">
      <label className="auth__label">{label}</label>
      <input
        className="auth__input"
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autocomplete}
        required={required}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
      />
      {error && <span className="auth__input-error">{error}</span>}
    </div>
  );
}

export default InputField;
