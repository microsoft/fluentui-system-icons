import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Payment20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 6.5c0-1.1.9-2 2-2h11a2 2 0 012 2V8h-15V6.5z" fill={primaryFill} /><path d="M2.5 9h15v4.5a2 2 0 01-2 2h-11a2 2 0 01-2-2V9zm11 4a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /></svg>;
};

export default Payment20Filled;