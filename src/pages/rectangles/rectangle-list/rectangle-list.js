import { RectangleListItem } from './rectange-list-item';
import './rectangle-list.scss';

export const RectangleList = ({ rectangles, onDeleteRectangle }) => {
  return (
    <div className="RectangleList">
      {
        rectangles.length > 0 ? (
          rectangles.map((rectangle) => (
            <RectangleListItem
              key={rectangle.id}
              rectangle={rectangle}
              onDeleteRectangle={onDeleteRectangle}
            />
          ))
        ) : (
          <div className="Card"> No rectangles yet </div>
        )
      }
    </div>
  );
};
