import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Subtract48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 23.5c0-.83.67-1.5 1.5-1.5h33a1.5 1.5 0 010 3h-33A1.5 1.5 0 016 23.5z" fill={primaryFill} /></svg>;
};

export default Subtract48Filled;