import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Previous24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 20a1 1 0 102 0V4a1 1 0 10-2 0v16z" fill={primaryFill} /><path d="M20.75 19.05a1.75 1.75 0 01-2.77 1.42l-10.47-7.5c-1-.72-.97-2.23.08-2.9l10.47-6.71c1.16-.75 2.69.09 2.69 1.47v14.22z" fill={primaryFill} /></svg>;
};

export default Previous24Filled;