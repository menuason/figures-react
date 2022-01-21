import { RectangleListItem } from './rectange-list-item';
import PatchStyles from 'patch-styles';
import * as classes from './rectangle-list.modules.scss';

export const RectangleList = ({ rectangles, onDeleteRectangle }) => {
  return (
    <PatchStyles classNames={classes}>
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
    </PatchStyles>
  );
};
