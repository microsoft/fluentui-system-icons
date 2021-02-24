import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpRight16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.46 10.91c.66.68 1.6 1.09 2.79 1.09h3a.75.75 0 000-1.5h-3c-.82 0-1.37-.28-1.71-.63A1.96 1.96 0 015 8.5c0-.5.19-1 .54-1.37.34-.35.9-.63 1.71-.63h3.19l-.72.72a.75.75 0 001.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H7.25c-1.18 0-2.13.41-2.79 1.09A3.46 3.46 0 003.5 8.5c0 .87.31 1.75.96 2.41z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpRight16Filled;