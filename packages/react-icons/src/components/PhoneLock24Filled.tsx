import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneLock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM13.75 2C14.99 2 16 3 16 4.25v6.92A6.5 6.5 0 0011.02 18H8.75a.75.75 0 00-.1 1.5h2.66c.3.95.83 1.8 1.5 2.5H6.25C5.01 22 4 21 4 19.75V4.25C4 3.01 5 2 6.25 2h7.5zm3.75 12c-.92 0-1.67.7-1.74 1.6l-.01.15v.78a1 1 0 00-.74.85l-.01.12V20a1 1 0 00.88 1H19a1 1 0 001-.89V17.5a1 1 0 00-.64-.94l-.1-.03-.01-.78c0-.97-.78-1.75-1.75-1.75zm0 1c.38 0 .7.28.74.65l.01.1v.75h-1.5v-.75c0-.42.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default PhoneLock24Filled;