import PatchStyles from 'patch-styles';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import * as classes from './triangle-page.modules.scss'
import { TriangleList } from '../trinagle-list';
import { Outlet } from 'react-router-dom';

export const TrianglePage = () =>{
  return (
    <PatchStyles classNames={classes}>
      <Breadcrumbs label="Triangle" path="/triangles/create"/>
        <div className="TriangleContent">
          <TriangleList/>
          <div className="CanvasContainer">
            {/*<FiguresCanvas/>*/}
            <Outlet />
          </div>
        </div>
    </PatchStyles>
  )
}
