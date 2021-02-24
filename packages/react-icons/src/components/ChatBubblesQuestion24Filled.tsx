import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChatBubblesQuestion24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.5a7.5 7.5 0 114.41 6.84c-1.26.29-2.61.54-3.24.65a1 1 0 01-1.15-1.17c.12-.61.38-1.92.68-3.15A7.47 7.47 0 012 10.5zm6.14-4.2c-.44.24-.79.61-1.05 1.1a.75.75 0 001.32.71c.15-.27.3-.4.44-.48.15-.08.35-.13.65-.13.22 0 .49.08.68.24.17.14.32.36.32.76 0 .2-.08.28-.59.69-.45.35-1.16.93-1.16 2.06a.75.75 0 001.5 0c0-.37.16-.55.59-.88l.08-.07c.4-.3 1.08-.83 1.08-1.8 0-.85-.35-1.5-.87-1.92a2.83 2.83 0 00-2.99-.27zM10.5 14a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /><path d="M9.4 19a7.47 7.47 0 008.19 1.34c1.26.29 2.62.54 3.25.65a1 1 0 001.15-1.18c-.12-.6-.4-1.91-.7-3.14a7.5 7.5 0 00-4.34-10.26A8.5 8.5 0 019.4 19z" fill={primaryFill} /></svg>;
};

export default ChatBubblesQuestion24Filled;