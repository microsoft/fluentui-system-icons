import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowMultiple20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h8A2.5 2.5 0 0115 4.5V5H2v-.5z" fill={primaryFill} /><path d="M2 6h13v6.5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 012 12.5V6z" fill={primaryFill} /><path d="M7.5 18a2.5 2.5 0 01-2.45-2h7.45a3.5 3.5 0 003.5-3.5V5.05a2.5 2.5 0 012 2.45V14a4 4 0 01-4 4H7.5z" fill={primaryFill} /></svg>;
};

export default WindowMultiple20Filled;