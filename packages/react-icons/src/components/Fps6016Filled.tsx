import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps6016Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2.75a.5.5 0 011 0V3A.75.75 0 007 3v-.25a2 2 0 10-4 0V6a2 2 0 101.5-1.94V2.75zM4.5 6a.5.5 0 111 0 .5.5 0 01-1 0z" fill={primaryFill} /><path d="M10 1a2 2 0 00-2 2v3a2 2 0 104 0V3a2 2 0 00-2-2zm.5 5a.5.5 0 01-1 0V3a.5.5 0 011 0v3z" fill={primaryFill} /><path d="M1.5 10a.5.5 0 00-.5.5v4a.5.5 0 001 0V13h1.5a.5.5 0 000-1H2v-1h2.5a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M6.5 10a.5.5 0 00-.5.5v4a.5.5 0 001 0v-1h1.25a1.75 1.75 0 100-3.5H6.5zm1.75 2.5H7V11h1.25a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M11 11.5c0-.83.67-1.5 1.5-1.5h2a.5.5 0 010 1h-2a.5.5 0 000 1h1a1.5 1.5 0 010 3h-2a.5.5 0 010-1h2a.5.5 0 000-1h-1a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
};

export default Fps6016Filled;