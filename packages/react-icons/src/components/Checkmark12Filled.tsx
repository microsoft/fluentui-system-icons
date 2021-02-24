import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.95 7.89L3.03 5.97a.75.75 0 00-1.06 1.06l2.5 2.5c.31.31.82.29 1.1-.05l5-6a.75.75 0 00-1.15-.96L4.95 7.89z" fill={primaryFill} /></svg>;
};

export default Checkmark12Filled;