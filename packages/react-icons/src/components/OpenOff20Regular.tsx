import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.88 1.89A3 3 0 003 7v7a3 3 0 003 3h7a3 3 0 002.26-1.03l1.89 1.88a.5.5 0 00.7-.7l-15-15zm11.7 13.11A2 2 0 0113 16H6a2 2 0 01-2-2V7a2 2 0 01.74-1.55L9.29 10l-.14.15a.5.5 0 00.7.7l.15-.14 4.55 4.55z" fill={primaryFill} /><path d="M16 11.5v2.38l-1-1V11.5a.5.5 0 011 0z" fill={primaryFill} /><path d="M16 4.7l-4.59 4.6-.7-.71L15.29 4H10.5a.5.5 0 010-1h6a.5.5 0 01.5.5v6a.5.5 0 01-1 0V4.7z" fill={primaryFill} /><path d="M8.5 5H7.12l-1-1H8.5a.5.5 0 010 1z" fill={primaryFill} /></svg>;
};

export default OpenOff20Regular;