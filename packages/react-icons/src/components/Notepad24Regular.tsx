import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Notepad24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 22c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.75.65v.85h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h.75c1.24 0 2.25 1 2.25 2.25v11c0 .06 0 .12-.02.18l-.03.09-.04.1-.03.03a.69.69 0 01-.1.13l-4.5 4.5a.74.74 0 01-.09.08l.09-.08a.74.74 0 01-.1.1l-.1.04-.11.05-.12.03h-9.1zm12-17h-12c-.42 0-.75.34-.75.75v14c0 .42.34.75.75.75H14v-2.25c0-1.2.93-2.17 2.1-2.24l.16-.01h2.25V5.75a.75.75 0 00-.75-.75zm-.31 12.5h-1.2c-.37 0-.69.28-.74.65v1.3l1.94-1.95zM7.25 16h4a.75.75 0 01.1 1.5h-4.1a.75.75 0 01-.1-1.5h4.1-4zm0-4h9a.75.75 0 01.1 1.5h-9.1a.75.75 0 01-.1-1.5h9.1-9zm0-4h9a.75.75 0 01.1 1.5h-9.1a.75.75 0 01-.1-1.5h9.1-9z" fill={primaryFill} /></svg>;
};

export default Notepad24Regular;