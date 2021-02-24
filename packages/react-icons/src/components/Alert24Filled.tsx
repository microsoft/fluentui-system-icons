import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Alert24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.04 19h5.92a3 3 0 01-5.92 0zM12 2a7.5 7.5 0 017.5 7.5v4l1.42 3.16a.95.95 0 01-.87 1.34H3.95a.95.95 0 01-.86-1.34L4.5 13.5V9.24A7.5 7.5 0 0112 2z" fill={primaryFill} /></svg>;
};

export default Alert24Filled;