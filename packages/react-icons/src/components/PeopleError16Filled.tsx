import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleError16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M9.53 6.36A2 2 0 0111 3a2 2 0 011.66 3.12 5.52 5.52 0 00-3.13.24z" fill={primaryFill} /><path d="M6.2 13h-.14C3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h3.76a5.48 5.48 0 00-1.05 5z" fill={primaryFill} /><path d="M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM11.5 9a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
};

export default PeopleError16Filled;