import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l3.14 3.14A4.73 4.73 0 004 9.75v9.5A4.75 4.75 0 008.75 24h9.5c1.3 0 2.47-.52 3.33-1.36l3.14 3.14a.75.75 0 001.06-1.06L3.28 2.22zm17.24 19.36c-.59.57-1.39.92-2.27.92h-9.5a3.25 3.25 0 01-3.25-3.25v-9.5c0-.88.35-1.68.92-2.27L12.94 14l-.72.72a.75.75 0 101.06 1.06l.72-.72 6.52 6.52z" fill={primaryFill} /><path d="M8.21 5.03L9.68 6.5h2.57a.75.75 0 000-1.5h-3.5l-.54.03z" fill={primaryFill} /><path d="M15.06 11.88l1.06 1.06L23 6.06v6.19a.75.75 0 001.5 0v-8a.75.75 0 00-.75-.75h-8a.75.75 0 000 1.5h6.19l-6.88 6.88z" fill={primaryFill} /><path d="M22.97 19.79l-1.47-1.47v-2.57a.75.75 0 011.5 0v3.5l-.03.54z" fill={primaryFill} /></svg>;
};

export default OpenOff28Regular;