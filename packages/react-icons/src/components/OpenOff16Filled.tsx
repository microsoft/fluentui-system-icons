import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.19 12.9l1.96 1.95a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3.1 3.81C2.43 4.41 2 5.28 2 6.25v4.5C2 12.55 3.46 14 5.25 14h4.5c.97 0 1.84-.43 2.44-1.1zm-1.06-1.07c-.33.4-.82.67-1.38.67h-4.5c-.97 0-1.75-.78-1.75-1.75v-4.5c0-.56.26-1.05.67-1.38l2.96 2.96a.75.75 0 001.04 1.04l2.96 2.96z" fill={primaryFill} /><path d="M8.53 6.4l1.06 1.07 2.91-2.9v2.68a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69L8.53 6.4z" fill={primaryFill} /><path d="M13 10.88l-1.43-1.44a.75.75 0 011.43.31v1.13z" fill={primaryFill} /><path d="M5.12 3l1.44 1.43A.75.75 0 006.25 3H5.12z" fill={primaryFill} /></svg>;
};

export default OpenOff16Filled;