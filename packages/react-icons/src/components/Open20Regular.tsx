import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.96 3.3a.5.5 0 00-.46-.3h-6a.5.5 0 000 1h4.8l-6.15 6.15a.5.5 0 00.7.7L16 4.71V9.5a.5.5 0 001 0v-6a.5.5 0 00-.04-.2z" fill={primaryFill} /><path d="M6 5a2 2 0 00-2 2v7c0 1.1.9 2 2 2h7a2 2 0 002-2v-2.5a.5.5 0 011 0V14a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h2.5a.5.5 0 010 1H6z" fill={primaryFill} /></svg>;
};

export default Open20Regular;