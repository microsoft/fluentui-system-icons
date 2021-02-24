import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier2X32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.98 13.75a1.25 1.25 0 001.5-.96c0-.04.03-.1.06-.18.07-.16.18-.38.35-.6.32-.38.88-.83 1.98-.83 1.03 0 1.75.34 2.17.79.4.43.64 1.1.48 2.07-.09.49-.33.78-.83 1.06a9 9 0 01-1.54.61l-.82.28c-.92.33-2.04.8-2.9 1.7A5.62 5.62 0 007 21.76 1.25 1.25 0 008.25 23h7.5a1.25 1.25 0 000-2.5h-6.1c.13-.5.35-.83.59-1.08a4.79 4.79 0 011.93-1.08l.57-.19c.7-.23 1.5-.5 2.17-.87a3.88 3.88 0 002.07-2.82 4.8 4.8 0 00-1.11-4.2 5.36 5.36 0 00-4-1.58 4.83 4.83 0 00-4.83 3.55v.02h-.01c0 .01-.13.6 0 .01-.15.67.27 1.34.95 1.5zm12.15 2.62a1.25 1.25 0 00-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 101.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 001.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 00-1.76-1.76l-1.37 1.36-1.37-1.36z" fill={primaryFill} /></svg>;
};

export default Multiplier2X32Filled;