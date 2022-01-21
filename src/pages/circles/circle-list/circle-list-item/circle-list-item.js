import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { circlesSlice } from '../../../../store/slices';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import * as classes from './circle-list-item.modules.scss';

export const CircleListItem = ({ circle, onDeleteCircle }) => {
  const dispatch = useDispatch();

  const handleDeleteCircle = () => {
    onDeleteCircle(circle.id);
    dispatch(circlesSlice.actions.deleteCircle(circle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CircleListItem">
        <div className="Avatar"> O </div>
        <span>coordinate x: {circle.point.x} y: {circle.point.y}</span>
        <span>radius: {circle.radius}</span>
        <div className="deleteIcon">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteCircle()} />
        </div>
      </div>
    </PatchStyles>
  );
};
