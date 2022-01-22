import { RectangleListItem } from './rectange-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles( (theme) => ({
  RectangleList: {
    flexDirection: 'column',
    display: 'flex',
    color: '#d0cfd5',
    gap: theme.spacing(2),
  },
}));

export const RectangleList = ({ rectangles, onDeleteRectangle }) => {
  const classes = useStyles();
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
