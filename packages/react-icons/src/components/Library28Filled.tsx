import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Library28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.99 3a2 2 0 012 2v18a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2H6zm7 0a2 2 0 012 2v18a2 2 0 01-2 2h-2a2 2 0 01-2-2V5c0-1.1.9-2 2-2h2zm9.08 3.54l3.86 15.49a2 2 0 01-1.46 2.42l-1.96.49a2 2 0 01-2.42-1.46L16.23 8a2 2 0 011.45-2.42l1.97-.5a2 2 0 012.42 1.46z" fill={primaryFill} /></svg>;
};

export default Library28Filled;