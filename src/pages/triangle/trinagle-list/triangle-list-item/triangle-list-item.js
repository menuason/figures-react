import PatchStyles from 'patch-styles';
import * as classes from './triangle-list-item.modules.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { trianglesSlice } from '../../../../store/slices';

export const TriangleListItem = ({ triangle, onDelete }) => {
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
