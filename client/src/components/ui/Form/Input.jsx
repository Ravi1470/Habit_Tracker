const Input = ({ type, name, value, onChange, placeholder, maxLength,required }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        maxLength={maxLength}
        onChange={onChange} // ✅ Now React sees the handler
        placeholder={placeholder}
        className="w-full p-3 border rounded-md focus:ring-2 bg-sky-950 text-white focus:ring-blue-400"
      />
    </div>
  );
};

export default Input;
