import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorBackgroundAccent20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11.66v1.84c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-5.07a3 3 0 01.59 2.02c.32.06.62.23.85.48l.01.01.23.29h.01c.14.18.33.43.52.73.33.51.86 1.46.86 2.47 0 1.35-.93 3-2.75 3-1.79 0-2.72-1.6-2.75-2.94l-.68.68a3 3 0 01-4.24 0L3 11.66z" fill={primaryFill} /></svg>;
};

export default ColorBackgroundAccent20Regular;