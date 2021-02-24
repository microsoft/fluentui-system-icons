import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm-.5 3a.5.5 0 00-.5.5v5.09a.5.5 0 00.5.41h3.09a.5.5 0 00-.09-1H10V5.41A.5.5 0 009.5 5z" fill={primaryFill} /></svg>;
};

export default Clock20Filled;