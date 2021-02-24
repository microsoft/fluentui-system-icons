import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Document28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.45 23.6c0 .5-.4.9-.9.9H6.4a.9.9 0 01-.9-.9V4.4c0-.5.4-.9.9-.9h7.55V10c0 1.1.9 2 2 2h6.5v11.6zm-7-19.58l3.24 3.24 3.24 3.24h-5.98a.5.5 0 01-.5-.5V4.02zm7.8 5.68l-7-7-.22-.18A2.39 2.39 0 0014.55 2H6.4A2.4 2.4 0 004 4.4v19.2A2.4 2.4 0 006.4 26h15.15a2.4 2.4 0 002.4-2.4V11.4a2.4 2.4 0 00-.7-1.7z" fill={primaryFill} /></svg>;
};

export default Document28Regular;