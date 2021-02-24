import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FullScreenMaximize24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5.75c0-.69.56-1.25 1.25-1.25h2a.75.75 0 000-1.5h-2A2.75 2.75 0 003 5.75v2a.75.75 0 001.5 0v-2z" fill={primaryFill} /><path d="M4.5 18.25c0 .69.56 1.25 1.25 1.25h2a.75.75 0 010 1.5h-2A2.75 2.75 0 013 18.25v-2a.75.75 0 011.5 0v2z" fill={primaryFill} /><path d="M18.25 4.5c.69 0 1.25.56 1.25 1.25v2a.75.75 0 001.5 0v-2A2.75 2.75 0 0018.25 3h-2a.75.75 0 000 1.5h2z" fill={primaryFill} /><path d="M19.5 18.25c0 .69-.56 1.25-1.25 1.25h-2a.75.75 0 000 1.5h2A2.75 2.75 0 0021 18.25v-2a.75.75 0 00-1.5 0v2z" fill={primaryFill} /></svg>;
};

export default FullScreenMaximize24Regular;