import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../../store/slices';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  PointListItem: {
    background: '#252049',
    minWidth: theme.spacing(40),
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

export const PointListItem = ({ point }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeletePoint = () => {
    dispatch(pointsSlice.actions.deletePoint(point.id));
  };


  return (
    <PatchStyles classNames={classes}>
      <div className="PointListItem">
        <div className="Avatar">{point.name}</div>
        <span>coordinate x: {point.x} y: {point.y}</span>
        <div className="deleteIcon">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleDeletePoint()} />
        </div>
      </div>
    </PatchStyles>
  );
};
