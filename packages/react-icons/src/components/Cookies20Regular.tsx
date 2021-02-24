import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cookies20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M10 11a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M13 14a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7 14a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M10 2a8 8 0 107.87 6.56.5.5 0 00-.87-.24A2 2 0 0113.5 7c0-.26-.18-.5-.44-.55a2 2 0 01-.95-3.38.5.5 0 00-.24-.85A8.02 8.02 0 0010 2zm-7 8a7 7 0 017.87-6.95 2.99 2.99 0 001.65 4.29 3 3 0 004.47 2.26l.01.4a7 7 0 11-14 0z" fill={primaryFill} /></svg>;
};

export default Cookies20Regular;