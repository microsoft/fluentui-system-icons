import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleTeam16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M11 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-.5a.5.5 0 100 1 .5.5 0 000-1z" fill={primaryFill} /><path d="M3.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM3 4.5a.5.5 0 111 0 .5.5 0 01-1 0z" fill={primaryFill} /><path d="M4.27 7A2 2 0 004 8H2v2.5a1.5 1.5 0 002.1 1.38c.07.33.19.64.34.94A2.5 2.5 0 011 10.5V8a1 1 0 011-1h2.27z" fill={primaryFill} /><path d="M11.56 12.82A2.5 2.5 0 0015 10.5V8a1 1 0 00-1-1h-2.27A2 2 0 0112 8h2v2.5a1.5 1.5 0 01-2.1 1.38c-.07.33-.19.64-.34.94z" fill={primaryFill} /><path d="M6 7a1 1 0 00-1 1v3a3 3 0 006 0V8a1 1 0 00-1-1H6zm0 1h4v3a2 2 0 01-4 0V8z" fill={primaryFill} /></svg>;
};

export default PeopleTeam16Regular;