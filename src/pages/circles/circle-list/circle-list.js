import { CircleListItem } from './circle-list-item';
import './circle-list.scss';

export const CircleList = ({ circles, onDeleteCircle }) => {
  return (
    <div className="CircleList">
      {
        circles.length > 0 ? (
          circles.map((circle) => (
            <CircleListItem
              key={circle.id}
              circle={circle}
              onDeleteCircle={onDeleteCircle}
            />
          ))
        ) : (
          <div className="Card">No circles yet</div>
        )
      }
    </div>
  );
};
