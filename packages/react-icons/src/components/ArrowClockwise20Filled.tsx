import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowClockwise20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.63 2.03a8 8 0 107.36 7.7.75.75 0 10-1.5.05 6.5 6.5 0 11-1.57-4.03l.2.25h-2.37l-.1.01a.75.75 0 000 1.49H16.85c.33-.05.6-.31.64-.64V2.66a.75.75 0 00-.64-.65h-.2c-.34.05-.6.3-.65.64v2.06a7.98 7.98 0 00-5.37-2.68z" fill={primaryFill} /></svg>;
};

export default ArrowClockwise20Filled;