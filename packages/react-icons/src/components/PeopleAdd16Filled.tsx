import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleAdd16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5c0 .53.2 1 .53 1.36a5.49 5.49 0 013.13-.24A2 2 0 109 5z" fill={primaryFill} /><path d="M6.06 13h.15a5.5 5.5 0 011.05-5H3.5C2.67 8 2 8.67 2 9.5v.77C2 12.1 3.45 13 6.06 13z" fill={primaryFill} /><path d="M6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V11H9.5a.5.5 0 000 1H11v1.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H12V9.5z" fill={primaryFill} /></svg>;
};

export default PeopleAdd16Filled;