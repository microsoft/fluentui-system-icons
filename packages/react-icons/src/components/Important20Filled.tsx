import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Important20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a3 3 0 00-3 3c0 2.23.79 5.2 1.22 6.69.24.79.97 1.31 1.78 1.31s1.54-.52 1.78-1.31C12.2 10.2 13 7.25 13 5a3 3 0 00-3-3z" fill={primaryFill} /><path d="M10 14a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
};

export default Important20Filled;