import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PinOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.58 8.72L6.9 7.6 2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-4.76-4.75-1.1 3.32a.5.5 0 01-.83.2l-3.19-3.19L3.71 17H3v-.7H3l3.57-3.57-3.18-3.18a.5.5 0 01.2-.83z" fill={primaryFill} /><path d="M17.62 9.4l-4.2 1.9L8.7 6.58l1.9-4.2a1.5 1.5 0 012.43-.44l5.03 5.03c.74.74.52 2-.44 2.43z" fill={primaryFill} /></svg>;
};

export default PinOff20Filled;