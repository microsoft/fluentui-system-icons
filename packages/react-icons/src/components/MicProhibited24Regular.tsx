import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicProhibited24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 6v5.5a6.5 6.5 0 00-1.53.9c.02-.13.03-.26.03-.4V6a2.5 2.5 0 00-5 0v6a2.5 2.5 0 003.3 2.37c-.28.5-.49 1.05-.63 1.63H11a4 4 0 01-4-4V6a4 4 0 118 0z" fill={primaryFill} /><path d="M11 17.5c0 1.1.27 2.13.75 3.03v.72a.75.75 0 01-1.5.1v-2.37A6.75 6.75 0 014 12.48v-.73a.75.75 0 011.5-.1v.6a5.25 5.25 0 005.03 5.25H11z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
};

export default MicProhibited24Regular;