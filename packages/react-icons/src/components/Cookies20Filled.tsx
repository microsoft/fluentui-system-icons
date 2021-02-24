import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cookies20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 019.87-7.78.5.5 0 01.24.85 2 2 0 00.95 3.38c.26.06.44.29.44.55A2 2 0 0017 8.32a.5.5 0 01.87.24A8 8 0 112 10zm5-2a1 1 0 10-2 0 1 1 0 002 0zm3 3a1 1 0 100-2 1 1 0 000 2zm3 3a1 1 0 10-2 0 1 1 0 002 0zm-6 0a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Cookies20Filled;