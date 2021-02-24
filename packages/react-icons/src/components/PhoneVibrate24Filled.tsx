import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneVibrate24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm-2.5 16h-2.5a.75.75 0 00-.1 1.5h2.6a.75.75 0 100-1.5zm6.88-10.43a1 1 0 011.25.45l.05.1L22 9.6a3 3 0 01-.27 2.74l-.11.17-.16.2a1 1 0 00-.16.85l.04.12.58 1.46a1 1 0 01-1.8.85l-.06-.1-.58-1.47a3 3 0 01.27-2.74l.11-.17.16-.2a1 1 0 00.16-.85l-.04-.12-.58-1.46a1 1 0 01.56-1.3zm-17.5 0a1 1 0 011.25.45l.05.1.58 1.47a3 3 0 01-.27 2.74l-.11.17-.16.2a1 1 0 00-.16.85l.04.12.58 1.46a1 1 0 01-1.8.85l-.06-.1L2 14.4a3 3 0 01.27-2.74l.11-.17.16-.2a1 1 0 00.16-.85l-.04-.12-.58-1.46a1 1 0 01.56-1.3z" fill={primaryFill} /></svg>;
};

export default PhoneVibrate24Filled;