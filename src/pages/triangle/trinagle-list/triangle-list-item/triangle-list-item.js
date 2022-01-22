import PatchStyles from 'patch-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { trianglesSlice } from '../../../../store/slices';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TriangleListItem: {
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

export const TriangleListItem = ({ triangle, onDelete }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleTriangleDelete = () => {
    dispatch(trianglesSlice.actions.deleteTriangle(triangle.id));
    onDelete(triangle);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="TriangleListItem">
        <div className="Avatar">T</div>
        <span>
          Triangle: {triangle.points[0].name}
          {triangle.points[1].name}
          {triangle.points[2].name}
        </span>
        <div className="deleteIcon">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleTriangleDelete(triangle)} />
        </div>
      </div>
    </PatchStyles>
  );
};
