import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Balloon20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7a5 5 0 0110 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 01-2.9 2.1V14a1 1 0 001 1H14a2 2 0 012 2v.5a.5.5 0 01-1 0V17a1 1 0 00-1-1h-2.5a2 2 0 01-2-2v-.05a5.06 5.06 0 01-2.9-2.09C5.66 10.6 5 8.86 5 7zm5.57-3a.5.5 0 10-.14 1c.81.11 1.46.76 1.57 1.57a.5.5 0 001-.14A2.86 2.86 0 0010.56 4z" fill={primaryFill} /></svg>;
};

export default Balloon20Filled;