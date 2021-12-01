import { Input } from '../components/Input';

export const PointCanvas = () => {

  return (
    <div className="CanvasContainer">
      <div className="Canvas">
        canvas
        <canvas>
        </canvas>
      </div>
      <div className="InputContainer">
        <Input label="x axis" />
        <Input label="y axis" />
      </div>
    </div>
  );
};
