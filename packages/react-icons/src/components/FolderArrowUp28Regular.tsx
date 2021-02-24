import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderArrowUp28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.2 4c.47 0 .92.14 1.3.4l.15.12 2.37 1.98h9.73c1.14 0 2.08.84 2.23 1.94l.01.16.01.15v5.65c-.44-.48-.95-.9-1.5-1.24V8.75c0-.38-.28-.7-.65-.74l-.1-.01h-9.73l-2.37 1.98c-.36.3-.8.47-1.25.51l-.2.01H3.5v11.25c0 .38.28.7.65.74l.1.01h9.37c.24.54.53 1.04.88 1.5H4.25c-1.2 0-2.17-.93-2.24-2.1L2 21.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h5.96zm0 1.5H4.26c-.38 0-.7.28-.74.65l-.01.1V9h6.7c.15 0 .28-.04.4-.11l.09-.06 1.89-1.58-1.9-1.58a.75.75 0 00-.37-.16l-.1-.01z" fill={primaryFill} /><path d="M27 19.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-7-2.8v6.8a.5.5 0 001 0v-6.8l2.15 2.15a.5.5 0 00.7-.7l-3-3a.5.5 0 00-.35-.15.5.5 0 00-.35.15l-3 3a.5.5 0 00.7.7L20 16.71z" fill={primaryFill} /></svg>;
};

export default FolderArrowUp28Regular;