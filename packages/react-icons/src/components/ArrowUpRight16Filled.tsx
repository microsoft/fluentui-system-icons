import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpRight16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75v5.5a.75.75 0 01-1.5 0V4.56l-9.22 9.22a.75.75 0 01-1.06-1.06l9.22-9.22H7.75A.75.75 0 017 2.75z" fill={primaryFill} /></svg>;
};

export default ArrowUpRight16Filled;