import { SvgProps } from '../types';

export const HeadPhoneIcon = (props: SvgProps) => {
  const { width, height, style,fill, className, svgClass, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 20 21" className={svgClass} fill={fill}>
        <path d="M3.75 10.45H4.75C5.01522 10.45 5.26957 10.5554 5.45711 10.7429C5.64464 10.9304 5.75 11.1848 5.75 11.45V13.45C5.75 13.7152 5.64464 13.9696 5.45711 14.1571C5.26957 14.3447 5.01522 14.45 4.75 14.45C4.48478 14.45 4.23043 14.3447 4.04289 14.1571C3.85536 13.9696 3.75 13.7152 3.75 13.45V10.45Z" stroke={fill} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15.3701 14.44C15.1049 14.44 14.8505 14.3346 14.663 14.1471C14.4755 13.9596 14.3701 13.7052 14.3701 13.44V11.44C14.3701 11.1748 14.4755 10.9204 14.663 10.7329C14.8505 10.5453 15.1049 10.44 15.3701 10.44H16.3701V13.44C16.3701 13.7052 16.2648 13.9596 16.0772 14.1471C15.8897 14.3346 15.6353 14.44 15.3701 14.44Z" stroke={fill} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.04 17.84C10.5923 17.84 11.04 17.3923 11.04 16.84C11.04 16.2877 10.5923 15.84 10.04 15.84C9.48775 15.84 9.04004 16.2877 9.04004 16.84C9.04004 17.3923 9.48775 17.84 10.04 17.84Z" stroke={fill} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3.92993 8.04999C4.26036 6.67975 5.04215 5.46051 6.14951 4.58844C7.25687 3.71637 8.62541 3.24219 10.0349 3.24219C11.4445 3.24219 12.813 3.71637 13.9204 4.58844C15.0277 5.46051 15.8095 6.67975 16.1399 8.04999" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.17993 6.67999C7.53928 6.27495 7.98044 5.95069 8.47429 5.72864C8.96813 5.50658 9.50346 5.39178 10.0449 5.39178C10.5864 5.39178 11.1217 5.50658 11.6156 5.72864C12.1094 5.95069 12.5506 6.27495 12.9099 6.67999" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.3601 13.26V14.84C16.3601 15.3704 16.1493 15.8791 15.7743 16.2542C15.3992 16.6293 14.8905 16.84 14.3601 16.84H11.05" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
