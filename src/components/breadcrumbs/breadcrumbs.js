import { Button } from '../button';
import { Link } from 'react-router-dom';
import * as classes from './breadcrambs.mudules.scss';
import PatchStyles from 'patch-styles';

export const Breadcrumbs = ({ label, path }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="Breadcrumbs">
        <Button size="small">{label}</Button>
        <Link
          to={path}
        >
          CREATE
        </Link>
      </div>
    </PatchStyles>
  );
};
