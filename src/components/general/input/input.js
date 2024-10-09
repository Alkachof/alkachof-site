function Input({ label, name, value, onChange, type, placeholder, error, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input
        className={`input ${error && "input-error"}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Input