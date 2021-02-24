import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonBoard24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v8.5C3 16.55 4.46 18 6.25 18h8.5c1.8 0 3.25-1.46 3.25-3.25v-8.5C18 4.45 16.54 3 14.75 3h-8.5zm6.5 4.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm.75 3.25c.83 0 1.5.67 1.5 1.5v.5c0 .5-.09.86-.25 1.16-.17.3-.43.56-.82.83-.73.5-1.86.76-3.43.76a6.12 6.12 0 01-3.24-.76 3.1 3.1 0 01-.94-.83c-.2-.3-.32-.66-.32-1.16v-.5c0-.83.67-1.5 1.5-1.5h6z" fill={primaryFill} /><path d="M6.01 19c.58.9 1.59 1.5 2.74 1.5h6.5c2.9 0 5.25-2.35 5.25-5.25v-6.5c0-1.15-.6-2.16-1.5-2.74v9.24A3.75 3.75 0 0115.25 19H6.01z" fill={primaryFill} /></svg>;
};

export default PersonBoard24Filled;