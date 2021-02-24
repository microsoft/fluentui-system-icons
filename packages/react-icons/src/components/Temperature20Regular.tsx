import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Temperature20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5c.28 0 .5.22.5.5v5.06a2 2 0 11-1 0V7c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M10 2a3 3 0 00-3 3v6.35A3.99 3.99 0 0010 18a4 4 0 003-6.65V5a3 3 0 00-3-3zm0 1a2 2 0 012 2v6.75l.14.15a3 3 0 11-4.29 0l.15-.15V5c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
};

export default Temperature20Regular;