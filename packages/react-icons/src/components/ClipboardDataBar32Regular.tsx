import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardDataBar32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12c-.83 0-1.5.67-1.5 1.5v9a1.5 1.5 0 003 0v-9c0-.83-.67-1.5-1.5-1.5zm4 3.5a1.5 1.5 0 013 0v7a1.5 1.5 0 01-3 0v-7zm7 2.5c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 003 0v-3c0-.83-.67-1.5-1.5-1.5zM19 2a3 3 0 012.83 2h1.67A3.5 3.5 0 0127 7.5v19a3.5 3.5 0 01-3.5 3.5h-15A3.5 3.5 0 015 26.5v-19A3.5 3.5 0 018.5 4h1.67A3 3 0 0113 2h6zm-6 2a1 1 0 100 2h6a1 1 0 100-2h-6zM8.5 6C7.67 6 7 6.67 7 7.5v19c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-19c0-.83-.67-1.5-1.5-1.5h-1.67A3 3 0 0119 8h-6a3 3 0 01-2.83-2H8.5z" fill={primaryFill} /></svg>;
};

export default ClipboardDataBar32Regular;