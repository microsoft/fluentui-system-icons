import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 1.75a.75.75 0 011.5 0V6.5a.5.5 0 001 0V2.75a.75.75 0 011.5 0V7.5a.5.5 0 101 0V4.75a.75.75 0 011.5 0V9.5c0 .81-.34 1.71-.74 2.5-.41.79-.9 1.53-1.29 2.05-.45.62-1.17.95-1.9.95H7.73c-.96 0-1.8-.54-2.26-1.34a35.67 35.67 0 00-3.34-4.82l-.02-.01v-.01a.5.5 0 01.03-.67c.35-.35.76-.5 1.18-.49.4.01.78.16 1.1.34.2.11.4.24.57.38V2.75a.75.75 0 011.5 0V6.5a.5.5 0 001 0V1.75z" fill={primaryFill} /></svg>;
};

export default HandLeft16Filled;