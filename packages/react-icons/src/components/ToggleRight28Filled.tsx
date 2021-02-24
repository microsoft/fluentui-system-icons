import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleRight28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 14a6 6 0 00-6-6H8a6 6 0 000 12h12a6 6 0 006-6zm-7 3a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
};

export default ToggleRight28Filled;