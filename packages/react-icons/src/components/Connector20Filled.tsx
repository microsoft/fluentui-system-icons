import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Connector20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3a.5.5 0 00-.5.5v2.8L2.15 8.14A.5.5 0 002 8.5v5c0 .28.22.5.5.5H4v2.5a.5.5 0 001 0V14h1v2.5a.5.5 0 001 0V14h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.15-.35L7 6.29V3.5a.5.5 0 00-.5-.5h-2z" fill={primaryFill} /><path d="M15.5 17a.5.5 0 00.5-.5v-2.8l1.85-1.85a.5.5 0 00.15-.35v-5a.5.5 0 00-.5-.5H17V3.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V6h-.5a.5.5 0 00-.5.5v5c0 .13.05.26.15.35L13 13.71v2.79c0 .28.22.5.5.5h2zM13 6V4h3v2h-3z" fill={primaryFill} /></svg>;
};

export default Connector20Filled;