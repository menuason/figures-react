import { Header } from './header';

import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const  useStyles = makeStyles({})

export const Page = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="Page">
        <Header />
        {/*<PointPage showForm={showForm} hideForm={handleHideForm} />*/}
      </div>
    </PatchStyles>
  );
};
