import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import './logo.scss';

export const Logo = () => {
  return (
    <div className="LogoContainer">
      <LogoSvg />

      <h2 className="LogoText">Figures</h2>
    </div>
  );
};
