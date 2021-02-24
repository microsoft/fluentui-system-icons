import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardDataBar32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.5 4h-1.67A3 3 0 0019 2h-6a3 3 0 00-2.83 2H8.5A3.5 3.5 0 005 7.5v19A3.5 3.5 0 008.5 30h15a3.5 3.5 0 003.5-3.5v-19A3.5 3.5 0 0023.5 4zM13 4h6a1 1 0 110 2h-6a1 1 0 110-2zm-2.5 8c.83 0 1.5.67 1.5 1.5v9a1.5 1.5 0 01-3 0v-9c0-.83.67-1.5 1.5-1.5zm4 3.5a1.5 1.5 0 013 0v7a1.5 1.5 0 01-3 0v-7zm7 2.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 01-3 0v-3c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
};

export default ClipboardDataBar32Filled;