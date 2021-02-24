import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUp20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.13 9.16a.5.5 0 10.74.68L9.5 3.67V17.5a.5.5 0 101 0V3.67l5.63 6.17a.5.5 0 10.74-.68l-6.32-6.91a.75.75 0 00-1.1 0L3.13 9.16z" fill={primaryFill} /></svg>;
};

export default ArrowUp20Regular;