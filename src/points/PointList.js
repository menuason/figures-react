export const PointList = (props) => {
  return (
    <div className="CoordinateCard">
      {
        props.points.map(({ x, y, name }) => {
          return (
            <div className="Card">
              <div className="Avatar">{name}</div>
              coordinate x:{x} y:{y} name:{name}
            </div>
          );
        })
      }
    </div>
  );
};
