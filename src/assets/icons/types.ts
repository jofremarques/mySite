import { CSSProperties, MouseEventHandler, SVGProps } from "react";

export type SvgProps = {
  width?: string | number;
  height?: string | number;
  style?: CSSProperties;
  fill?: string;
  svgClass?: string;
  stroke?: GLfloat;
  onClick?: MouseEventHandler<HTMLDivElement>;
} & SVGProps<SVGSVGElement>;
