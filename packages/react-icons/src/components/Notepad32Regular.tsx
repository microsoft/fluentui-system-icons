import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Notepad32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 12a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zm1 4a1 1 0 100 2h8a1 1 0 100-2h-8zm-1 6a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm1-18a1 1 0 10-2 0v1H9a3 3 0 00-3 3v18a3 3 0 003 3h9.22a3 3 0 002.03-.79l4.78-4.38a3 3 0 00.97-2.21V8a3 3 0 00-3-3h-1V4a1 1 0 10-2 0v1h-3V4a1 1 0 10-2 0v1h-3V4zM9 7h14a1 1 0 011 1v13h-4a2.5 2.5 0 00-2.5 2.5V27H9a1 1 0 01-1-1V8a1 1 0 011-1zm10.5 19.19V23.5c0-.28.22-.5.5-.5h2.97l-3.47 3.19z" fill={primaryFill} /></svg>;
};

export default Notepad32Regular;