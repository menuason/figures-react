import { CircleListItem } from './circle-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  CircleList: {
    flexDirection: 'column',
    display: 'flex',
    color: '#d0cfd5',
    gap: theme.spacing(2),
  },
}));

export const CircleList = ({ circles, onDeleteCircle }) => {
  const classes = useStyles();
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
