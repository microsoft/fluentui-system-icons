import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Filter28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 19a1 1 0 110 2h-6a1 1 0 110-2h6zm4-6a1 1 0 110 2H7a1 1 0 110-2h14zm3-6a1 1 0 110 2H4a1 1 0 010-2h20z" fill={primaryFill} /></svg>;
};

export default Filter28Filled;