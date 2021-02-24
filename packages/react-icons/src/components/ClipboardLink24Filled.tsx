import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardLink24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V14h-5a5 5 0 00-4 8H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2zm3.5 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M23 19a4 4 0 00-4-4h-.1a.75.75 0 00.1 1.5h.16a2.5 2.5 0 01-.16 5h-.1A.75.75 0 0019 23h.2a4 4 0 003.8-4z" fill={primaryFill} /><path d="M15.75 15.75A.75.75 0 0015 15h-.2a4 4 0 00.2 8h.1a.75.75 0 00-.1-1.5h-.16a2.5 2.5 0 01.16-5h.1a.75.75 0 00.65-.75z" fill={primaryFill} /><path d="M18.75 18.25h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
};

export default ClipboardLink24Filled;