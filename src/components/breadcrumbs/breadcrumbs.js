import { Button } from '../button';
import { Link } from 'react-router-dom';
import './breadcrambs.scss';

export const Breadcrumbs = () => {

  return (
    <div className="Breadcrumbs">
      <Button size="small">Points</Button>
      <Link
        to="/points/create"
      >
        CREATE
      </Link>
    </div>
  );
};
