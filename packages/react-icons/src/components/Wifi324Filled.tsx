import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wifi324Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.94 16.45a1.5 1.5 0 112.12 2.12 1.5 1.5 0 01-2.12-2.12zm-2.6-2.75a5.23 5.23 0 018.5 1.63 1 1 0 01-1.84.8 3.23 3.23 0 00-5.93-.01 1 1 0 11-1.83-.8c.27-.6.63-1.16 1.1-1.62z" fill={primaryFill} /></svg>;
};

export default Wifi324Filled;