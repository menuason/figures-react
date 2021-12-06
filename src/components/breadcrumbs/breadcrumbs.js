import './breadcrambs.scss';
import { Button } from '../button/button';

export const Breadcrumbs = ({ onCreatePointCLicked, showForm }) => {

  return (

    <div className="Breadcrumbs">
      <Button size="small">Points</Button>
      <Button
        variant="contained"
        onClick={() => onCreatePointCLicked()}
        disabled={showForm}
      >CREATE</Button>
    </div>
  );
};
