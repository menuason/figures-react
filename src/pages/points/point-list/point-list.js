import './point-list.scss';
import { PointListItem } from './point-list-item/point-list-item';

export const PointList = ({ points, onDeletePoint }) => {

  return (
    <div className="CoordinateCard">
      {
        points.length > 0 ? (
          points.map((point) => <PointListItem point={point} onDeletePoint={onDeletePoint} />)
        ) : (
          <div className="Card"> No points yet
          </div>
        )
      }
    </div>
  );
};
