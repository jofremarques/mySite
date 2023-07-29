import { SvgProps } from '../types';

export const ArrowTransitionIcon = (props: SvgProps) => {
  const { width, height, style, fill, className, svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        style={style}
        viewBox="0 0 18 16"
        className={svgClass}
        fill={fill}
      >
        <path
          d="M17.25 10.75H0.75L4.75 15.25M13.25 0.75L17.25 5.25H0.75"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
