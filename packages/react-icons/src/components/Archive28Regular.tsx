import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Archive28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.25 3c.97 0 1.75.78 1.75 1.75v3.5c0 .7-.4 1.3-1 1.58v11.42c0 2-1.57 3.64-3.55 3.74l-.2.01H8.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V9.83c-.6-.28-1-.88-1-1.58v-3.5C4 3.78 4.78 3 5.75 3h16.5zm-.75 7h-15v11.25c0 1.2.93 2.17 2.1 2.24l.15.01h10.5c1.2 0 2.17-.93 2.24-2.1l.01-.15V10zm-9.75 3.5h4.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6-4.5zm10.5-9H5.75a.25.25 0 00-.25.25v3.5c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25v-3.5a.25.25 0 00-.25-.25z" fill={primaryFill} /></svg>;
};

export default Archive28Regular;