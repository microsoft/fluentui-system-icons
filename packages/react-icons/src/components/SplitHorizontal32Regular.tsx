import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 15a1 1 0 100 2h26a1 1 0 100-2H3zm5 11.5v-8H6v8A3.5 3.5 0 009.5 30h13a3.5 3.5 0 003.5-3.5v-8h-2v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 018 26.5zm18-13v-8A3.5 3.5 0 0022.5 2h-13A3.5 3.5 0 006 5.5v8h2v-8C8 4.67 8.67 4 9.5 4h13c.83 0 1.5.67 1.5 1.5v8h2z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal32Regular;