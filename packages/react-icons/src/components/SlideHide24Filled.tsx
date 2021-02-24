import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideHide24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v8.5C2 15.99 3 17 4.25 17h.25V8.75c0-1.8 1.46-3.25 3.25-3.25H19v-.25C19 4.01 18 3 16.75 3H5.25z" fill={primaryFill} /><path d="M19.75 6.5h-.6a.75.75 0 00.1 1.5h.6c.37.06.65.37.65.75v1.1a.75.75 0 001.5-.1V8.6a2.25 2.25 0 00-2.25-2.1z" fill={primaryFill} /><path d="M7 12.15a.75.75 0 00-1.5.1v2.6a.75.75 0 001.5-.1v-2.6z" fill={primaryFill} /><path d="M6.25 16.5c.38 0 .7.28.74.64l.01.1v1.01c0 .38.28.7.65.74l.1.01h.5a.75.75 0 01.1 1.5h-.6c-1.2 0-2.17-.93-2.24-2.1l-.01-.15v-1c0-.42.34-.75.75-.75z" fill={primaryFill} /><path d="M21.25 16.5c.41 0 .75.33.75.75v1c0 1.24-1 2.25-2.25 2.25h-1a.75.75 0 010-1.5h1c.41 0 .75-.34.75-.75v-1c0-.42.34-.75.75-.75z" fill={primaryFill} /><path d="M16.25 19h-1.6a.75.75 0 00.1 1.5h1.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M10.75 19h1.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M21.25 11.5c.38 0 .7.28.74.65l.01.1v2.5a.75.75 0 01-1.5.1v-2.6c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M8.75 6.5a.75.75 0 010 1.5h-1a.75.75 0 00-.75.75v1a.75.75 0 01-1.5 0v-1c0-1.24 1-2.25 2.25-2.25h1z" fill={primaryFill} /><path d="M16.75 6.5h-1.6a.75.75 0 00.1 1.5h1.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M11.25 6.5h1.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /></svg>;
};

export default SlideHide24Filled;