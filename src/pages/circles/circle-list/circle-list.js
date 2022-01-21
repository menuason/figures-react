import { CircleListItem } from './circle-list-item';
import * as classes from './circle-list.modules.scss';
import PatchStyles from 'patch-styles';

export const CircleList = ({ circles, onDeleteCircle }) => {
  return (
    <PatchStyles classNames={classes}>
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
    </PatchStyles>
  );
};
