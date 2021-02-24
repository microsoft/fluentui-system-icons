import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelShare12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v3c0 1.1.9 2 2 2h3.09a1.5 1.5 0 100-1H3a1 1 0 01-1-1V3a1 1 0 011-1h3a1 1 0 011 1h1a2 2 0 00-2-2H3zm5 6.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 11a2 2 0 002-2V6a2 2 0 00-2-2H5.91a1.5 1.5 0 100 1H9a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1H4c0 1.1.9 2 2 2h3zM4.5 5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
};

export default ChannelShare12Regular;