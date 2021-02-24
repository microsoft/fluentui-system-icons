import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 24a10 10 0 0110-10h20a10 10 0 010 20H14A10 10 0 014 24zm5.5 0a5 5 0 1010 0 5 5 0 00-10 0z" fill={primaryFill} /></svg>;
};

export default ToggleLeft48Filled;