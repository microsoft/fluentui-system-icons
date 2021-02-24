import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h2.52a6.47 6.47 0 01-.85-5H9.5v5z" fill={primaryFill} /><path d="M21 9.5v2.52a6.47 6.47 0 00-5-.85V9.5h5z" fill={primaryFill} /><path d="M14.5 9.5v2.23a6.53 6.53 0 00-2.77 2.77H9.5v-5h5z" fill={primaryFill} /><path d="M21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5z" fill={primaryFill} /><path d="M14.5 3h-5v5h5V3z" fill={primaryFill} /><path d="M8 3H6.25A3.25 3.25 0 003 6.25V8h5V3z" fill={primaryFill} /><path d="M3 9.5v5h5v-5H3z" fill={primaryFill} /><path d="M3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 011 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default TableAdd24Filled;