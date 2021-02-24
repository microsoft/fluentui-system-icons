import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOff12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.85 1.15a.5.5 0 10-.7.7L4 4.71v.79a2 2 0 002.68 1.88l.75.76A3 3 0 013 5.5a.5.5 0 10-1 0 4 4 0 003.5 3.97v1.03a.5.5 0 101 0V9.47c.6-.08 1.17-.29 1.66-.6l1.99 1.98a.5.5 0 00.7-.7l-9-9z" fill={primaryFill} /><path d="M9.52 7.4l-.75-.75A3 3 0 009 5.5a.5.5 0 111 0c0 .69-.17 1.33-.48 1.9z" fill={primaryFill} /><path d="M7.97 5.85L4.22 2.09A2 2 0 018 3v2.5c0 .12-.01.24-.03.35z" fill={primaryFill} /></svg>;
};

export default MicOff12Filled;