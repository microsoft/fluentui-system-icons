import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SerialPort24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M10.25 10.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M8.25 14a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M11.5 13.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M13.25 14a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M16.5 13.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M12 11.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M15.25 10.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M17 11.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M4.9 7a2.75 2.75 0 00-2.67 3.39l1.07 4.5A2.75 2.75 0 005.98 17h12.04c1.27 0 2.38-.87 2.67-2.11l1.08-4.5A2.75 2.75 0 0019.09 7H4.91zm-1.2 3.04c-.2-.79.4-1.54 1.2-1.54h14.2c.8 0 1.4.75 1.2 1.54l-1.07 4.5c-.13.56-.63.96-1.21.96H5.98c-.58 0-1.08-.4-1.22-.96l-1.07-4.5z" fill={primaryFill} /></svg>;
};

export default SerialPort24Regular;