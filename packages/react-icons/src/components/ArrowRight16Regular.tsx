import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 7.5a.5.5 0 100 1h9.7l-4.03 3.63a.5.5 0 10.66.74l5-4.5a.5.5 0 000-.74l-5-4.5a.5.5 0 00-.66.74L12.2 7.5H2.5z" fill={primaryFill} /></svg>;
};

export default ArrowRight16Regular;