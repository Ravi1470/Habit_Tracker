const Textarea = ({ name, value, handleChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={handleChange}
    rows="3"
    placeholder={placeholder}
    className="w-full p-3 border rounded-md bg-sky-950 text-white focus:ring-2 focus:ring-indigo-400"
  />
);

export default Textarea;
