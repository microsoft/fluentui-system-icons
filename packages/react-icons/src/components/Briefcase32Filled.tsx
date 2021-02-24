import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3a1 1 0 00-1 1v5H8a5 5 0 00-5 5v9a5 5 0 005 5h16a5 5 0 005-5v-9a5 5 0 00-5-5h-2V4a1 1 0 00-1-1H11zm9 6h-8V5h8v4z" fill={primaryFill} /></svg>;
};

export default Briefcase32Filled;