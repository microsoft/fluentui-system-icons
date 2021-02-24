import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PlugDisconnected24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 3.28a.75.75 0 00-1.06-1.06l-2.01 2.01a4.25 4.25 0 00-5.47.46l-1.06 1.07c-.69.69-.69 1.8 0 2.48l3.58 3.58c.69.69 1.8.69 2.48 0l1.07-1.06a4.25 4.25 0 00.46-5.47l2.01-2.01zm-3.59 2.48l.03.02.02.03a2.75 2.75 0 010 3.88l-1.06 1.07c-.1.1-.26.1-.36 0l-3.58-3.58a.25.25 0 010-.36l1.07-1.06a2.75 2.75 0 013.88 0z" fill={primaryFill} /><path d="M10.78 11.28a.75.75 0 10-1.06-1.06L8 11.94l-.47-.47a.75.75 0 00-1.06 0l-1.78 1.77a4.25 4.25 0 00-.46 5.47l-2.01 2.01a.75.75 0 101.06 1.06l2.01-2.01a4.25 4.25 0 005.47-.46l1.77-1.78c.3-.3.3-.77 0-1.06l-.47-.47 1.72-1.72a.75.75 0 10-1.06-1.06L11 14.94 9.06 13l1.72-1.72zm-3.31 2.25l3 3 .47.47-1.25 1.24a2.75 2.75 0 01-3.88 0l-.05-.05a2.75 2.75 0 010-3.88L7 13.06l.47.47z" fill={primaryFill} /></svg>;
};

export default PlugDisconnected24Regular;