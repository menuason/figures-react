import * as classes from './input.modules.scss';
import PatchStyles from 'patch-styles';

export const Input = ({ label, name, value, onChange }) => {
  return (
    <PatchStyles classNames={classes}>
      <label className="Input">
        <span>{label}</span>
        <input
          type="text"
          name={name}
          className="Axis"
          value={value}
          onChange={onChange}
        />
      </label>
    </PatchStyles>
  );
};
