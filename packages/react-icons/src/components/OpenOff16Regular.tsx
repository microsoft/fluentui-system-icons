import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.26 12.97l1.89 1.88a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l1.88 1.89A3 3 0 002 6v5a3 3 0 003 3h5a3 3 0 002.26-1.03zm-.7-.71A2 2 0 0110 13H5a2 2 0 01-2-2V6a2 2 0 01.74-1.55L7.29 8l-.14.15a.5.5 0 10.7.7L8 8.71l3.55 3.55z" fill={primaryFill} /><path d="M8.7 6.59l.71.7L13 3.71V7.5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.8L8.7 6.59z" fill={primaryFill} /><path d="M13 9.5v1.38l-1-1V9.5a.5.5 0 011 0z" fill={primaryFill} /><path d="M5.12 3l1 1H7a.5.5 0 000-1H5.12z" fill={primaryFill} /></svg>;
};

export default OpenOff16Regular;