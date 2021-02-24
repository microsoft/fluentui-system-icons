import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopMac32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 8a4 4 0 014-4h16a4 4 0 014 4v12a4 4 0 01-4 4h-4v1a1 1 0 001 1h1a1 1 0 110 2H10a1 1 0 110-2h1a1 1 0 001-1v-1H8a4 4 0 01-4-4V8zm14.17 18a3 3 0 01-.17-1v-1h-4v1a3 3 0 01-.17 1h4.34zM24 22a2 2 0 002-2H6c0 1.1.9 2 2 2h16zm2-14a2 2 0 00-2-2H8a2 2 0 00-2 2v10h20V8z" fill={primaryFill} /></svg>;
};

export default DesktopMac32Regular;