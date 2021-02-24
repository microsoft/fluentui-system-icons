import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Megaphone24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.9 5.62c.07.21.1.43.1.64v11.48a2.25 2.25 0 01-2.9 2.16l-5.5-1.64A4 4 0 016 16.7V16l-2.4-.71A2.25 2.25 0 012 13.13v-2.26c0-1 .65-1.87 1.6-2.16l15.5-4.6c1.2-.36 2.45.32 2.8 1.51zM7.5 16.44v.06a2.5 2.5 0 004.62 1.32L7.5 16.44zm12.04-10.9l-15.5 4.61a.75.75 0 00-.54.72v2.26c0 .33.22.63.54.72l15.5 4.6a.75.75 0 00.96-.71V6.26a.75.75 0 00-.96-.72z" fill={primaryFill} /></svg>;
};

export default Megaphone24Regular;