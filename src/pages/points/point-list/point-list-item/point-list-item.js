import './point-list-item.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from  '@fortawesome/free-solid-svg-icons'
export const PointListItem = ({ point,onDeletePoint }) => {
  return (
    <div className="PointListItem">
      <div className="Avatar">{point.name}</div>
      <span>coordinate x: {point.x} y: {point.y}</span>
      <div className="deleteIcon">
        <FontAwesomeIcon icon={faTimes} onClick={() => onDeletePoint(point)} />
      </div>
    </div>
  );
};
