import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClipboardMore24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25V18.5c-.19.14-.36.31-.5.5a2.5 2.5 0 00-1-.8V6.26a.75.75 0 00-.75-.75h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.47-.4-1.87-1H6.25a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75H11c0 .56.19 1.08.5 1.5H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm2.24 2.1l.01.15V4.1zm-2.24-.6h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M17.5 22a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M13.5 22a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M21.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
};

export default ClipboardMore24Regular;