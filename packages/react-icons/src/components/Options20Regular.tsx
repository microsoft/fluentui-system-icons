import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Options20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.95 5a2.5 2.5 0 00-4.9 0H2.5a.5.5 0 000 1h7.55a2.5 2.5 0 004.9 0h2.55a.5.5 0 000-1h-2.55zM12.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M9.95 14a2.5 2.5 0 00-4.9 0H2.5a.5.5 0 000 1h2.55a2.5 2.5 0 004.9 0h7.55a.5.5 0 000-1H9.95zM7.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
};

export default Options20Regular;