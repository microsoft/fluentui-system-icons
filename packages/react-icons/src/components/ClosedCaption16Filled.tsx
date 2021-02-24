import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClosedCaption16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h9a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 3h-9zm5.68 2.7a1.8 1.8 0 012.07.35.5.5 0 01-.7.7.8.8 0 00-.93-.15C9.34 6.74 9 7.14 9 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 01.7.7 1.8 1.8 0 01-2.07.35C8.46 9.94 8 9.14 8 8s.46-1.94 1.18-2.3zm-1.93.35a.5.5 0 01-.7.7.8.8 0 00-.93-.15C5.34 6.74 5 7.14 5 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 11.7.7 1.8 1.8 0 01-2.07.35C4.46 9.94 4 9.14 4 8s.46-1.94 1.18-2.3a1.8 1.8 0 012.07.35z" fill={primaryFill} /></svg>;
};

export default ClosedCaption16Filled;