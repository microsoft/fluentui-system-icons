import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterVertical32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 30a1 1 0 01-1-1v-2h-3.5A3.5 3.5 0 018 23.5v-3a3.5 3.5 0 013.5-3.5H15v-2H8.5A3.5 3.5 0 015 11.5v-3A3.5 3.5 0 018.5 5H15V3a1 1 0 112 0v2h6.5A3.5 3.5 0 0127 8.5v3a3.5 3.5 0 01-3.5 3.5H17v2h3.5a3.5 3.5 0 013.5 3.5v3a3.5 3.5 0 01-3.5 3.5H17v2a1 1 0 01-1 1z" fill={primaryFill} /></svg>;
};

export default AlignCenterVertical32Filled;