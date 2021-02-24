import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.88 3H12a1 1 0 011 .88V11h7a1 1 0 011 .88V12a1 1 0 01-.88 1H13v7a1 1 0 01-.88 1H12a1 1 0 01-1-.88V13H4a1 1 0 01-1-.88V12a1 1 0 01.88-1H11V4a1 1 0 01.88-1H12h-.12z" fill={primaryFill} /></svg>;
};

export default Add24Filled;