import React from 'react';
import { SvgProps } from '../types';

export const CloseIcon = (props: SvgProps) => {
  const { width, height, style, fill, className, svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg
        width={width ? width : '24'}
        height={height ? height : '24'}
        viewBox="0 0 21 20"
        className={svgClass}
        fill={fill ? fill : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 5.25L5.25 18.75"
          stroke={fill ? fill : '#A1A1AA'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.75 18.75L5.25 5.25"
          stroke={fill ? fill : '#A1A1AA'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

