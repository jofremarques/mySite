import { SvgProps } from '../types';

export const PhoneIcon = (props: SvgProps) => {
  const { width, height, style, fill, className, svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 1438.64 2539.98" className={svgClass} fill={fill}>
        <g id="Camada_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <path fill={fill} className="fil0" d="M604.88 2252.26l0 -24.79c0,-55.04 51.72,-104.2 119.05,-104.2 54.05,0 109.15,50.05 109.15,104.2l0 24.79c0,55.82 -57.26,104.16 -114.1,104.16 -56.84,0 -114.1,-48.34 -114.1,-104.16zm-466.34 -1939.75l1160.88 0 0 1637.13 -1160.88 0 0 -1637.13zm317.51 -198.42l525.86 0c32.15,0 31.72,84.32 0,84.32l-525.86 0c-30.44,0 -30.44,-84.32 0,-84.32zm-456.41 54.58l0 2197.69c0,88.78 84.85,173.63 173.63,173.63l1091.42 0c88.09,0 173.63,-85.53 173.63,-173.63l0 -2197.69c0,-16.73 -11.48,-53.86 -18.07,-66.29 -28.73,-54.18 -85.9,-102.39 -155.56,-102.39l-1091.42 0c-92.19,0 -173.63,90.45 -173.63,168.68z" />
        </g>
      </svg>
    </div >
  );
};
