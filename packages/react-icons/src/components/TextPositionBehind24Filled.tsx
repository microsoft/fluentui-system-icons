import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionBehind24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.75a1 1 0 000 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /><path d="M10.75 11c0-.09 0-.17.03-.25h2.45l.02.25v1.75h-2.5V11z" fill={primaryFill} /><path d="M14.24 10.75l.01.25v4.75a1 1 0 102 0V11v-.25a4.25 4.25 0 00-8.5.25v4.75a1 1 0 102 0V11l.01-.25a2.25 2.25 0 014.48 0z" fill={primaryFill} /><path d="M20.25 12.75h-3V11v-.25h3a1 1 0 110 2z" fill={primaryFill} /><path d="M6.75 11v-.25h-3a1 1 0 100 2h3V11z" fill={primaryFill} /><path d="M2.75 18.75a1 1 0 011-1h16.5a1 1 0 110 2H3.75a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default TextPositionBehind24Filled;