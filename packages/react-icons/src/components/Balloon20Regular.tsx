import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Balloon20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.43a.5.5 0 01.57-.43 2.86 2.86 0 012.42 2.43.5.5 0 01-.99.14A1.86 1.86 0 0010.43 5a.5.5 0 01-.43-.57z" fill={primaryFill} /><path d="M5 7a5 5 0 0110 0c0 1.87-.66 3.6-1.6 4.86a5.06 5.06 0 01-2.9 2.1V14a1 1 0 001 1H14a2 2 0 012 2v.5a.5.5 0 01-1 0V17a1 1 0 00-1-1h-2.5a2 2 0 01-2-2v-.05a5.06 5.06 0 01-2.9-2.09C5.66 10.6 5 8.86 5 7zm5-4a4 4 0 00-4 4c0 1.64.59 3.16 1.4 4.27C8.24 12.4 9.23 13 10 13s1.76-.6 2.6-1.73A7.31 7.31 0 0014 7a4 4 0 00-4-4z" fill={primaryFill} /></svg>;
};

export default Balloon20Regular;