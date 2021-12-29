import './input.scss';

export const Input = ({ label, name, value, onChange }) => {
  return (
    <label className="Input">
      <span>{label}</span>
      <input
        type="text"
        name={name}
        className="Axis"
        value={value}
        onChange={ onChange }
      />
    </label>
  );
};
