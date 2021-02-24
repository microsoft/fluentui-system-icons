import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareScreenStop48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 8A4.75 4.75 0 004 12.75v22.5A4.75 4.75 0 008.75 40h30.5A4.75 4.75 0 0044 35.25v-22.5A4.75 4.75 0 0039.25 8H8.75zm13.48 16l-5.86-5.87a1.25 1.25 0 011.76-1.76L24 22.23l5.87-5.86a1.25 1.25 0 011.76 1.76L25.77 24l5.86 5.87a1.25 1.25 0 01-1.76 1.76L24 25.77l-5.87 5.86a1.25 1.25 0 01-1.76-1.76L22.23 24z" fill={primaryFill} /></svg>;
};

export default ShareScreenStop48Filled;