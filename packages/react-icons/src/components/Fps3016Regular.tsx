import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps3016Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 1a2 2 0 00-2 2v3a2 2 0 104 0V3a2 2 0 00-2-2zm0 6a1 1 0 01-1-1V3a1 1 0 112 0v3a1 1 0 01-1 1z" fill={primaryFill} /><path d="M1.5 10a.5.5 0 00-.5.5v4a.5.5 0 001 0V13h1.5a.5.5 0 000-1H2v-1h2.5a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M6.5 10a.5.5 0 00-.5.5v4a.5.5 0 001 0v-1h1.25a1.75 1.75 0 100-3.5H6.5zm1.75 2.5H7V11h1.25a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M11 11.5c0-.83.67-1.5 1.5-1.5h2a.5.5 0 010 1h-2a.5.5 0 000 1h1a1.5 1.5 0 010 3h-2a.5.5 0 010-1h2a.5.5 0 000-1h-1a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /><path d="M5 4a1 1 0 10-.92-1.39c-.09.2-.26.39-.48.39-.33 0-.6-.27-.51-.6a2 2 0 113.23 2.1A2 2 0 015 8a2 2 0 01-1.91-1.4c-.1-.33.18-.6.51-.6.22 0 .4.19.48.39A1 1 0 105 5a.5.5 0 110-1z" fill={primaryFill} /></svg>;
};

export default Fps3016Regular;