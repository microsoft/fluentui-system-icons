import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicProhibited20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 017 10V5a2 2 0 114 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 10-6 0v5a3 3 0 003 3z" fill={primaryFill} /><path d="M4.5 10A4.5 4.5 0 009 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0z" fill={primaryFill} /><path d="M14.5 19a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-8a3.5 3.5 0 00-2.8 5.6l4.9-4.9a3.48 3.48 0 00-2.1-.7zm-2.1 6.3a3.5 3.5 0 004.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
};

export default MicProhibited20Regular;