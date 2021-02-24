import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Archive24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 3c.97 0 1.75.78 1.75 1.75v2c0 .7-.4 1.3-1 1.58v9.92A3.75 3.75 0 0116.25 22h-8.5A3.75 3.75 0 014 18.25V8.33c-.6-.28-1-.88-1-1.58v-2C3 3.78 3.78 3 4.75 3h14.5zm-.75 5.5h-13v9.75c0 1.24 1 2.25 2.25 2.25h8.5c1.24 0 2.25-1 2.25-2.25V8.5zm-8.5 3h4a.75.75 0 01.1 1.5H10a.75.75 0 01-.1-1.5H14h-4zm9.25-7H4.75a.25.25 0 00-.25.25v2c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25v-2a.25.25 0 00-.25-.25z" fill={primaryFill} /></svg>;
};

export default Archive24Regular;