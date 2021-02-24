import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Previous24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 20.25a.75.75 0 001.5 0V3.75a.75.75 0 10-1.5 0v16.5z" fill={primaryFill} /><path d="M18.23 20.47c1.16.84 2.77 0 2.77-1.42V4.83a1.75 1.75 0 00-2.7-1.47L7.85 10.07a1.75 1.75 0 00-.08 2.9l10.47 7.5zm1.27-1.42c0 .2-.23.32-.4.2l-10.47-7.5a.25.25 0 01.02-.41L19.1 4.62c.17-.1.39.01.39.21v14.22z" fill={primaryFill} /></svg>;
};

export default Previous24Regular;