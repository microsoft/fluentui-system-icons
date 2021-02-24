import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 4.25c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 01-1.5 0V6.06l-9.72 9.72a.75.75 0 11-1.06-1.06L21.94 5h-6.19a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M8.75 6.5A3.25 3.25 0 005.5 9.75v9.5c0 1.8 1.46 3.25 3.25 3.25h9.5c1.8 0 3.25-1.46 3.25-3.25v-3.5a.75.75 0 011.5 0v3.5A4.75 4.75 0 0118.25 24h-9.5A4.75 4.75 0 014 19.25v-9.5A4.75 4.75 0 018.75 5h3.5a.75.75 0 010 1.5h-3.5z" fill={primaryFill} /></svg>;
};

export default Open28Regular;