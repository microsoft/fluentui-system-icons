import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChatWarning24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-18.86 4.65l-1.11 4.29a.85.85 0 001.04 1.03l4.29-1.11A10 10 0 0022 12zM12 6.5c.41 0 .75.34.75.75v6.25a.75.75 0 01-1.5 0V7.25c0-.41.34-.75.75-.75zm1 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
};

export default ChatWarning24Filled;