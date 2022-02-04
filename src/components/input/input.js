import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Input: {
    borderRadius: theme.spacing(1),
    border: '1px solid #03f4a7',
    color: '#03f4a7',
    display: 'flex',
    flexDirection: 'column',
    height: theme.spacing(6),
    width: theme.spacing(17),
    padding: [theme.spacing(0.5), theme.spacing(1), theme.spacing(0.5), theme.spacing(1)],
  },
  Axis: {
    background: '#2b2a50',
    border: 'none',
    color: '#c4c4c4',

    '&:focus': {
      outline: 'none',
    },
  },
}));

export const Input = ({ label, name, value, onChange }) => {
  const classes = useStyles();
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
