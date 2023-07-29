import { SvgProps } from '../types';

export const FileCheckIcon = (props: SvgProps) => {
  const { width = 20, height = 20, fill = '#2D3640' } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 18.25H5.75C4.64543 18.25 3.75 17.3546 3.75 16.25V3.75C3.75 2.64543 4.64543 1.75 5.75 1.75H11.25M11.25 1.75L16.25 6.75M11.25 1.75V6.75H16.25M16.25 6.75V9.25M12.75 15.75L15 18.25L19.25 13.75"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
