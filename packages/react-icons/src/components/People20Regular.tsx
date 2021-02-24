import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const People20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2v1.5c0 2.05-2.09 3.5-5.5 3.5S2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm0 1H4a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16s4.5-1.1 4.5-2.5V12a1 1 0 00-1-1zm5-1a2 2 0 012 2v.5c0 2.09-1.57 3.5-4.5 3.5l-.41-.01c.2-.24.38-.5.52-.78l.1-.21h.03c2.24-.07 3.26-1.04 3.26-2.5V12a1 1 0 00-1-1h-2.17a3 3 0 00-.6-1H16zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm7 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-7-1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default People20Regular;