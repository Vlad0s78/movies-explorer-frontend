import React from "react";

function InputField({ label, type, id, placeholder, autocomplete, required, error }) {
  return (
    <div className="auth__field">
      <label className="auth__label">{label}</label>
      <input className="auth__input" type={type} id={id} placeholder={placeholder} autoComplete={autocomplete} required={required} />
      {error && <span className="auth__input-error">{error}</span>}
    </div>
  );
}

export default InputField;
