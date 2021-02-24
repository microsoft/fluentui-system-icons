import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextStrikethroughS16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.55 5.3c0-.41.22-.83.67-1.18a3.15 3.15 0 011.88-.57c1.12 0 2.04.52 2.36 1.05a.75.75 0 101.28-.8c-.68-1.07-2.16-1.75-3.64-1.75-1.05 0-2.03.32-2.78.87A2.98 2.98 0 004.05 5.3c0 .53.16 1.02.42 1.45H6.7c-.77-.36-1.14-.95-1.14-1.45zM2 8.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5h-1.64c.22.4.34.83.34 1.3 0 .99-.53 1.82-1.28 2.37-.74.56-1.72.88-2.77.88-1.49 0-2.99-.68-3.66-1.89a.75.75 0 111.32-.72c.33.6 1.23 1.11 2.34 1.11.75 0 1.42-.23 1.87-.58.46-.34.68-.76.68-1.17 0-.44-.28-.94-.86-1.3H2.75A.75.75 0 012 8.75z" fill={primaryFill} /></svg>;
};

export default TextStrikethroughS16Filled;