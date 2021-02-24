import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v5.77a6.47 6.47 0 00-8.2.98H8.76l-.1.01a.75.75 0 000 1.49h3.08a6.47 6.47 0 00.3 6.5H6.24A3.25 3.25 0 013 17.75V9.37a2.25 2.25 0 10.22-4.3A3.25 3.25 0 016.25 3h11.5zm-2.5 6.5h-6.6a.75.75 0 000 1.49H15.35a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
};

export default ChannelAdd24Filled;