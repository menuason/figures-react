import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { circlesSlice } from '../../../../store/slices';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles( (theme) => ({
  CircleListItem: {
    background: '#252049',
    minWidth: theme.spacing(320),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    position: 'relative',
  },

  Avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    border: '2px solid #2ba6a7',
  },

  deleteIcon: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    right: 0,
    padding: theme.spacing(1),
  },
}));

export const CircleListItem = ({ circle, onDeleteCircle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteCircle = () => {
    onDeleteCircle(circle.id);
    dispatch(circlesSlice.actions.deleteCircle(circle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CircleListItem">
        <div className="Avatar"> O</div>
        <span>coordinate x: {circle.point.x} y: {circle.point.y}</span>
        <span>radius: {circle.radius}</span>
        <div className="deleteIcon">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteCircle()} />
        </div>
      </div>
    </PatchStyles>
  );
};
