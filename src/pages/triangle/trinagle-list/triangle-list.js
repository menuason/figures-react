import PatchStyles from 'patch-styles';
import { TriangleListItem } from './triangle-list-item';
import { useSelector } from 'react-redux';
import { trianglesSlice } from '../../../store/slices';
import { makeStyles } from '@mui/styles';

const useStates = makeStyles((theme) => ({
  TriangleList: {
    flexDirection: 'column',
    display: 'flex',
    color: '#d0cfd5',
    gap: theme.spacing(2),
  },
}));

export const TriangleList = () => {
  const classes = useStates();
  const triangles = useSelector(trianglesSlice.selectors.selectAll);

  const handleDeleteTriangle = (selectedTriangle) => {
    console.log(selectedTriangle);
    const newTriangles = triangles.filter((triangle) => triangle.id !== selectedTriangle.id);
    localStorage.setItem('triangles', JSON.stringify(newTriangles));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="TriangleList">
        {
          triangles.length ? (
            triangles.map((triangle) => {
              return <TriangleListItem
                key={triangle.id}
                triangle={triangle} onDelete={handleDeleteTriangle} />;
            })
          ) : (
            'not yet'
          )
        }
      </div>
    </PatchStyles>
  );
};
