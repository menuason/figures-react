import './input.scss';

export const Input = ({ label, value, onChange }) => {
  return (
    <label className="Input" id="Axis">
      <span>{label}</span>
      <input
        type="text"
        className="Axis"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
