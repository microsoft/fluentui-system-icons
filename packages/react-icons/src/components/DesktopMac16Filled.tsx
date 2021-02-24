import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopMac16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.01 3.8L2 4v6c0 1.1.9 2 2 2h2v.5a.5.5 0 01-.5.5H5a.5.5 0 000 1h6a.5.5 0 000-1h-.5a.5.5 0 01-.5-.5V12h2a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-1.99 1.8zM9 12v.5c0 .18.03.34.09.5H6.9c.06-.16.09-.32.09-.5V12h2zm3-1H4a1 1 0 01-1-1h10a1 1 0 01-1 1z" fill={primaryFill} /></svg>;
};

export default DesktopMac16Filled;