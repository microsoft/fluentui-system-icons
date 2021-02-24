import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill={primaryFill} /><path d="M5 10a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill={primaryFill} /><path d="M3.5 13.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /><path d="M7.5 14h4.52c-.39.6-.68 1.28-.85 2H7.5a1 1 0 01-.12-2h.12z" fill={primaryFill} /><path d="M7.5 9H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12z" fill={primaryFill} /><path d="M7.5 4H21a1 1 0 01.12 2H7.5a1 1 0 01-.12-2h.12z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default TextBulletListAdd24Filled;