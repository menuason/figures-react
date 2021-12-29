import './point-list.scss';
import { PointListItem } from './point-list-item';

export const PointList = ({ points, onDeletePoint }) => {
  return (
    <div className="PointList">
      {
        points.length > 0 ? (
          points.map((point) => (
            <PointListItem
              key={point.id}
              point={point}
              onDeletePoint={onDeletePoint}
            />
          ))
        ) : (
          <div className="Card">No points yet</div>
        )
      }
    </div>
  );
};
