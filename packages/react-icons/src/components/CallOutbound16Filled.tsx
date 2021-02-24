import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallOutbound16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2a.5.5 0 000 1h1.8L9.14 6.15a.5.5 0 00.7.7L13 3.71V5.5a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3z" fill={primaryFill} /><path d="M6.57 3a1.75 1.75 0 00-2.2-.88l-.26.1a3.1 3.1 0 00-2.07 3.34c.2 1.32.65 3.07 1.59 4.55a14.37 14.37 0 002.92 3.2c1.25 1.05 3 .82 4.13-.24l.3-.28c.7-.66.73-1.78.06-2.48l-.78-.81a1.5 1.5 0 00-1.46-.41l-1.88.49a4.67 4.67 0 01-1.35-2.29L6.9 5.85c.41-.45.5-1.1.25-1.65L6.57 3z" fill={primaryFill} /></svg>;
};

export default CallOutbound16Filled;