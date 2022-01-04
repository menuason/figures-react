import { PointListItem } from './point-list-item';
import './point-list.scss';

export const PointList = ({ points }) => {
  return (
    <div className="PointList">
      {
        points.length > 0 ? (
          points.map((point) => (
            <PointListItem
              key={point.id}
              point={point}
            />
          ))
        ) : (
          <div className="Card">No points yet</div>
        )
      }
    </div>
  );
};
