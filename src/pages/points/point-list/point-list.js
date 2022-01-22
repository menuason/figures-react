import { PointListItem } from './point-list-item';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  PointList: {
    flexDirection: 'column',
    display: 'flex',
    color: '#d0cfd5',
    gap: theme.spacing(2),
  },
}));

export const PointList = ({ points }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
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
    </PatchStyles>
  );
};
