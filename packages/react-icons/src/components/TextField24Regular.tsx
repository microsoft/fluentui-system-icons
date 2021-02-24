import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextField24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 8.5h-2.25v7h.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h.5v-7H9v.75a.75.75 0 11-1.5 0v-1.5c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0V8.5z" fill={primaryFill} /><path d="M5.75 4A3.75 3.75 0 002 7.75v8.5A3.75 3.75 0 005.75 20h12.5A3.75 3.75 0 0022 16.25v-8.5A3.75 3.75 0 0018.25 4H5.75zM3.5 7.75c0-1.24 1-2.25 2.25-2.25h12.5c1.24 0 2.25 1 2.25 2.25v8.5c0 1.24-1 2.25-2.25 2.25H5.75c-1.24 0-2.25-1-2.25-2.25v-8.5z" fill={primaryFill} /></svg>;
};

export default TextField24Regular;