import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDown20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.87 10.84a.5.5 0 10-.74-.68l-5.63 6.17V2.5a.5.5 0 10-1 0v13.83l-5.63-6.17a.5.5 0 00-.74.68l6.31 6.91a.75.75 0 001.11 0l6.32-6.91z" fill={primaryFill} /></svg>;
};

export default ArrowDown20Regular;