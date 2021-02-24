import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cursor20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.64 2.29A1 1 0 005 3.06v14a1 1 0 001.76.65l3.52-4.07c.28-.33.7-.52 1.13-.52h5.6a1 1 0 00.63-1.77l-11-9.06z" fill={primaryFill} /></svg>;
};

export default Cursor20Filled;