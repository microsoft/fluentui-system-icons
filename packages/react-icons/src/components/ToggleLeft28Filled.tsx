import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 14a6 6 0 016-6h12a6 6 0 010 12H8a6 6 0 01-6-6zm7 3a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /></svg>;
};

export default ToggleLeft28Filled;