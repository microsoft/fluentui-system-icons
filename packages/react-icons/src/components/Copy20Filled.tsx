import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Copy20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4c0-1.1.9-2 2-2h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V4z" fill={primaryFill} /><path d="M4 6a2 2 0 011-1.73V14.5A2.5 2.5 0 007.5 17h6.23A2 2 0 0112 18H7.5A3.5 3.5 0 014 14.5V6z" fill={primaryFill} /></svg>;
};

export default Copy20Filled;