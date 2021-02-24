import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Stethoscope20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2a.5.5 0 00-.5.5v5a4.5 4.5 0 004 4.47V13a5 5 0 0010 0v-1.05a2.5 2.5 0 10-1 0V13a4 4 0 11-8 0v-1.03a4.5 4.5 0 004-4.47v-5a.5.5 0 00-.5-.5h-2a.5.5 0 000 1H10v4.5a3.5 3.5 0 01-7 0V3h1.5a.5.5 0 000-1h-2zm13 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
};

export default Stethoscope20Regular;