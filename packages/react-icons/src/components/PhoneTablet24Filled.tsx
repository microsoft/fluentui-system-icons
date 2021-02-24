import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneTablet24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 7C9.22 7 10 7.78 10 8.75v9.5c0 .97-.78 1.75-1.75 1.75h-4.5C2.78 20 2 19.22 2 18.25v-9.5C2 7.78 2.78 7 3.75 7h4.5zm-2 9.5h-.6a.75.75 0 000 1.49h.7a.75.75 0 000-1.49h-.1zM19.75 4c1.2 0 2.17.93 2.24 2.1l.01.15v8.5c0 1.2-.93 2.17-2.1 2.24l-.15.01H11V8.5A2.5 2.5 0 008.66 6H6.01A2.25 2.25 0 018.1 4h11.66zm-4.5 9.5h-2.5a.75.75 0 00-.1 1.5h2.6a.75.75 0 00.1-1.5h-.1z" fill={primaryFill} /></svg>;
};

export default PhoneTablet24Filled;