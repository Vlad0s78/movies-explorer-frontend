import React from "react";

function InputField({ label, type, name, placeholder, autoсomplete, required, error, onChange, minLength, maxLength, value, pattern }) {
  return (
    <div className="auth__field">
      <label className="auth__label">{label}</label>
      <input
        className="auth__input"
        pattern={pattern}
        type={type}
        name={name}
        placeholder={placeholder}
        autoсomplete={autoсomplete}
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
