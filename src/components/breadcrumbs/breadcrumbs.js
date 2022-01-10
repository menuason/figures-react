import { Button } from '../button';
import { Link } from 'react-router-dom';
import './breadcrambs.scss';

export const Breadcrumbs = ({ label, path }) => {
  return (
    <div className="Breadcrumbs">
      <Button size="small">{label}</Button>
      <Link
        to={path}
      >
        CREATE
      </Link>
    </div>
  );
};
