// variant: text(default), contained
// size: big, normal(default), small
import './button.modules.scss';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  Root: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#8c8ebe',
    borderRadius: '4px',
    padding: '6px 12px',
    height: '36px',
    lineHeight: '24px',

    '&:not(:disabled)': {
      cursor: 'pointer',
    },
    '&:disabled': {
      opacity: '0.3',
    },
  },
  Text: {
    '&:hover': {
      background: 'rgba(white, 0.1)',
    }
  },
  Contained: {
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #2ba6a1 0%, #03f4a7 100%)',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
    color: '#14343e',
  },
  Outlined: {
    background: '#2b2a50',
    borderRadius: '4px',
    border: '2px solid #03f4a7',
  },
  Normal: {
    padding: '6px 12px',
    height: '36px',
  },
  Small: {
    padding: '4px 8px',
    height: '30px',
  },
  Big: {
    padding: '8px 16px',
    height: '42px',
  },
}), { name: 'Button' });

const variantClassNames = {
  text: 'Text',
  contained: 'Contained',
  outlined: 'Outlined',
};

const sizeClassNames = {
  small: 'Small',
  normal: 'Normal',
  big: 'Big',
};

export const Button = ({ children, variant, size, ...buttonProps }) => {
  const classes = useStyles();

  const variantClassName = variantClassNames[variant] ?? variantClassNames.text;
  const sizeClassName = sizeClassNames[size] ?? sizeClassNames.normal;

  return (
    <PatchStyles classNames={classes}>
      <button
        type="button"
        className={`Root ${variantClassName} ${sizeClassName}`}
        {...buttonProps}
      >
        {children}
      </button>
    </PatchStyles>
  );
};
