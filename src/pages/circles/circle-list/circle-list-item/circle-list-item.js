import { useDispatch } from 'react-redux';
import { circlesSlice } from '../../../../store/slices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './circle-list-item.scss';

export const CircleListItem = ({ circle, onDeleteCircle }) => {
  const dispatch = useDispatch();

  const handleDeleteCircle = () => {
    onDeleteCircle(circle.id)
    dispatch(circlesSlice.actions.deleteCircle(circle.id));
  };
  return (
    <div className="CircleListItem">
      <div className="Avatar"> O</div>
      <span>coordinate x: {circle.x} y: {circle.y}</span>
      <span>radius: {circle.radius}</span>
      <div className="deleteIcon">
        <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteCircle()} />
      </div>
    </div>
  );
};
