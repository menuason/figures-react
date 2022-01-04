import './point-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../../store/slices';

export const PointListItem = ({ point }) => {
  const dispatch = useDispatch();

  const handleDeletePoint = () => {
    dispatch(pointsSlice.actions.deletePoint(point.id));
  };
  return (
    <div className="PointListItem">
      <div className="Avatar">{point.name}</div>
      <span>coordinate x: {point.x} y: {point.y}</span>
      <div className="deleteIcon">
        <FontAwesomeIcon icon={faTimes} onClick={() => handleDeletePoint()} />
      </div>
    </div>
  );
};
