import { useDispatch } from 'react-redux';
import { rectanglesSlice } from '../../../../store/slices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  RectangleListItem: {
    background: '#252049',
    minWidth: theme.spacing(40),
    borderRadius: theme.spacing(5),
    padding: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    position: 'relative',
  },
  deleteIcon: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    right: 0,
    padding: theme.spacing(1),
  },
}));

export const RectangleListItem = ({ rectangle, onDeleteRectangle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteRectangle = (rectangle) => {
    console.log(rectangle);
    onDeleteRectangle(rectangle.id);
    dispatch(rectanglesSlice.actions.deleteRectangle(rectangle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="RectangleListItem">
      <span>
        rectangle: {rectangle.points[0].name}
        {rectangle.points[1].name}
        {rectangle.points[2].name}
        {rectangle.points[3].name}
      </span>

        <div className="deleteIcon">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteRectangle(rectangle)} />
        </div>
      </div>
    </PatchStyles>
  );
};

