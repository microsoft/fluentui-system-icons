import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Shapes24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8.75A6.75 6.75 0 0115.46 8h-3.21A4.25 4.25 0 008 12.25v3.2a6.75 6.75 0 01-6-6.7z" fill={primaryFill} /><path d="M12.25 9A3.25 3.25 0 009 12.25v6.5c0 1.8 1.46 3.25 3.25 3.25h6.5c1.8 0 3.25-1.46 3.25-3.25v-6.5C22 10.45 20.54 9 18.75 9h-6.5z" fill={primaryFill} /></svg>;
};

export default Shapes24Filled;