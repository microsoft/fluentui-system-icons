import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneTablet24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 7C9.22 7 10 7.78 10 8.75v9.5c0 .97-.78 1.75-1.75 1.75h-4.5C2.78 20 2 19.22 2 18.25v-9.5C2 7.78 2.78 7 3.75 7h4.5zm0 1.5h-4.5a.25.25 0 00-.25.25v9.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-9.5a.25.25 0 00-.25-.25zm-2 7.5a.75.75 0 01.1 1.5h-.6a.75.75 0 01-.1-1.5h.6zm13.5-12c1.2 0 2.17.93 2.24 2.1l.01.15v8.5c0 1.2-.93 2.17-2.1 2.24l-.15.01H11v-1.5h8.75c.38 0 .7-.28.74-.65l.01-.1v-8.5c0-.38-.28-.7-.65-.74l-.1-.01H8.25c-.33 0-.6.2-.7.5H6A2.25 2.25 0 018.1 4h11.66zm-4.5 9a.75.75 0 010 1.5h-2.5a.75.75 0 110-1.5h2.5z" fill={primaryFill} /></svg>;
};

export default PhoneTablet24Regular;