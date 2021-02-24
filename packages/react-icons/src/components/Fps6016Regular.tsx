import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps6016Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2a1 1 0 00-1 1v1.27A2 2 0 113 6V3a2 2 0 114 0 .5.5 0 01-1 0 1 1 0 00-1-1zm0 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M1.5 10a.5.5 0 00-.5.5v4a.5.5 0 001 0V13h1.5a.5.5 0 000-1H2v-1h2.5a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M6.5 10a.5.5 0 00-.5.5v4a.5.5 0 001 0v-1h1.25a1.75 1.75 0 100-3.5H6.5zm1.75 2.5H7V11h1.25a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M11 11.5c0-.83.67-1.5 1.5-1.5h2a.5.5 0 010 1h-2a.5.5 0 000 1h1a1.5 1.5 0 010 3h-2a.5.5 0 010-1h2a.5.5 0 000-1h-1a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /><path d="M8 3a2 2 0 114 0v3a2 2 0 11-4 0V3zm3 0a1 1 0 10-2 0v3a1 1 0 002 0V3z" fill={primaryFill} /></svg>;
};

export default Fps6016Regular;