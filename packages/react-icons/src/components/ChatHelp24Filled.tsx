import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChatHelp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 11-4.64 18.86l-4.3 1.12a.85.85 0 01-1.03-1.04l1.11-4.29A10 10 0 0112 2zm0 13.5a1 1 0 100 2 1 1 0 000-2zm0-8.75A2.75 2.75 0 009.25 9.5a.75.75 0 001.5.1v-.23a1.25 1.25 0 012.5.13c0 .54-.13.8-.64 1.33l-.3.31c-.76.79-1.06 1.35-1.06 2.36a.75.75 0 001.5 0c0-.54.13-.8.64-1.33l.3-.31c.76-.79 1.06-1.35 1.06-2.36A2.75 2.75 0 0012 6.75z" fill={primaryFill} /></svg>;
};

export default ChatHelp24Filled;