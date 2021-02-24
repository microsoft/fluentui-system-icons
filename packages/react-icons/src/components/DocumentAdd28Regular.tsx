import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentAdd28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.45 23.6c0 .5-.4.9-.9.9h-7.7A7.54 7.54 0 0112.6 26h8.95a2.4 2.4 0 002.4-2.4V11.4a2.4 2.4 0 00-.7-1.7l-7-7-.16-.14-.06-.04A2.39 2.39 0 0014.55 2H6.4A2.4 2.4 0 004 4.4v9.47c.47-.25.97-.46 1.5-.6V4.4c0-.5.4-.9.9-.9h7.55V10c0 1.1.9 2 2 2h6.5v11.6zm-7-19.58l6.48 6.48h-5.98a.5.5 0 01-.5-.5V4.02z" fill={primaryFill} /><path d="M14 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20H3.5a.5.5 0 000 1H7v3.5a.5.5 0 101 0V21h3.5a.5.5 0 100-1H8v-3.5z" fill={primaryFill} /></svg>;
};

export default DocumentAdd28Regular;