import { SvgIconProps } from "../types";

export const Image = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/${src}`} alt={src} width={width} height={height} />
);
