import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Spacebar24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 11v2H4v-2a1 1 0 10-2 0v2c0 1.1.9 2 2 2h16a2 2 0 002-2v-2a1 1 0 10-2 0z" fill={primaryFill} /></svg>;
};

export default Spacebar24Filled;