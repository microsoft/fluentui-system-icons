import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Options20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 5h-2.36a2.5 2.5 0 00-4.78 0H2.75a.75.75 0 000 1.5h7.36a2.5 2.5 0 004.78 0h2.36a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M2.75 13.5a.75.75 0 000 1.5h2.36a2.5 2.5 0 004.78 0h7.36a.75.75 0 000-1.5H9.89a2.5 2.5 0 00-4.78 0H2.75z" fill={primaryFill} /></svg>;
};

export default Options20Filled;