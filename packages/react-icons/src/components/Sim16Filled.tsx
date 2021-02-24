import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Sim16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 1A2.5 2.5 0 003 3.5v9A2.5 2.5 0 005.5 15h5a2.5 2.5 0 002.5-2.5V5.33c0-.66-.26-1.3-.73-1.77l-1.83-1.83A2.5 2.5 0 008.67 1H5.5zm1 7H8v5H6.5A1.5 1.5 0 015 11.5v-2C5 8.67 5.67 8 6.5 8zM9 8h.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H9V8z" fill={primaryFill} /></svg>;
};

export default Sim16Filled;