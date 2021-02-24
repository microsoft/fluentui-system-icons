import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionSquare24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.75a1 1 0 000 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /><path d="M2.75 8.25a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z" fill={primaryFill} /><path d="M17.25 8.25a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3.75 10.75a1 1 0 100 2h2a1 1 0 100-2h-2z" fill={primaryFill} /><path d="M17.25 11.75a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3.75 14.25a1 1 0 100 2h2a1 1 0 100-2h-2z" fill={primaryFill} /><path d="M17.25 15.25a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" fill={primaryFill} /><path d="M2.75 18.75a1 1 0 011-1h16.5a1 1 0 110 2H3.75a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9.75 11a2.25 2.25 0 014.5 0v4.75a1 1 0 102 0V11a4.25 4.25 0 00-8.5 0v4.75a1 1 0 102 0V11z" fill={primaryFill} /></svg>;
};

export default TextPositionSquare24Filled;