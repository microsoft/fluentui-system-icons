import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowStepBack16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.85 2.15c.2.2.2.5 0 .7L3.71 5h2.33c1.47 0 2.9 0 4.23.4a6.5 6.5 0 013.65 2.82.5.5 0 01-.84.56 5.5 5.5 0 00-3.1-2.43A14.05 14.05 0 006 6H3.7l2.15 2.15a.5.5 0 11-.7.7l-3-3a.5.5 0 010-.7l3-3c.2-.2.5-.2.7 0zM8 14a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
};

export default ArrowStepBack16Regular;