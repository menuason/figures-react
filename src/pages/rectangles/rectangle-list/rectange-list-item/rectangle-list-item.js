import { useDispatch } from 'react-redux';
import { rectanglesSlice } from '../../../../store/slices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import PatchStyles from 'patch-styles';
import * as classes from './rectangle-list-item.modules.scss';

export const RectangleListItem = ({ rectangle, onDeleteRectangle }) => {
  const dispatch = useDispatch();

  const handleDeleteRectangle = (rectangle) => {
    console.log(rectangle);
    onDeleteRectangle(rectangle.id);
    dispatch(rectanglesSlice.actions.deleteRectangle(rectangle.id));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="RectangleListItem">
      <span>
        rectangle: {rectangle.points[0].name}
        {rectangle.points[1].name}
        {rectangle.points[2].name}
        {rectangle.points[3].name}
      </span>

        <div className="deleteIcon">
          <FontAwesomeIcon icon={faTimes} onClick={() => handleDeleteRectangle(rectangle)} />
        </div>
      </div>
    </PatchStyles>
  );
};

