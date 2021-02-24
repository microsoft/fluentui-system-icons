import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionFront24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.75a1 1 0 000 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /><path d="M12 8.75c-.78 0-1.47.4-1.87 1h-2.2a4.25 4.25 0 018.13 0h-2.19c-.4-.6-1.09-1-1.87-1z" fill={primaryFill} /><path d="M3.75 10.75a1 1 0 100 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /><path d="M7.75 13.75h2v2a1 1 0 11-2 0v-2z" fill={primaryFill} /><path d="M16.25 13.75h-2v2a1 1 0 102 0v-2z" fill={primaryFill} /><path d="M2.75 18.75a1 1 0 011-1h16.5a1 1 0 110 2H3.75a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default TextPositionFront24Filled;