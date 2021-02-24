import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeam32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 8a4 4 0 11-8 0 4 4 0 018 0zM7 12a3 3 0 100-6 3 3 0 000 6zm18 0a3 3 0 100-6 3 3 0 000 6zm-14.78 3.02c.32-.6.97-1.02 1.7-1.02h8.16A1.92 1.92 0 0122 15.92V22a6.01 6.01 0 01-6 6 6 6 0 01-6-6v-6.08c0-.32.08-.63.22-.9zm-1.72.9c0-.32.04-.63.13-.92H4a1 1 0 00-1 1v5a4 4 0 005.93 3.5A7.49 7.49 0 018.5 22v-6.08zm15 6.08c0 .88-.15 1.72-.43 2.5A4 4 0 0029 21v-5a1 1 0 00-1-1h-4.63c.09.3.13.6.13.92V22z" fill={primaryFill} /></svg>;
};

export default PeopleTeam32Filled;