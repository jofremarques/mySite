import { SvgProps } from '../types';

export const ArrowDownIcon = (props: SvgProps) => {
  const { width = 20, height = 20, fill = '#2D3640', className } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 512 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg" >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
};
