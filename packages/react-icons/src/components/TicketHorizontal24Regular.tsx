import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TicketHorizontal24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 5c.97 0 1.75.78 1.75 1.75v2.26c0 .4-.3.72-.69.75a2.25 2.25 0 000 4.48c.4.03.69.36.69.75v2.26c0 .97-.78 1.75-1.75 1.75H3.75C2.78 19 2 18.22 2 17.25v-2.26c0-.4.3-.72.69-.75a2.25 2.25 0 000-4.48A.75.75 0 012 9V6.75C2 5.78 2.78 5 3.75 5h16.5zm.25 3.38V6.75a.25.25 0 00-.25-.25H3.75a.25.25 0 00-.25.25v1.63a3.75 3.75 0 010 7.24v1.63c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25v-1.63a3.75 3.75 0 01-.19-7.18l.19-.06z" fill={primaryFill} /></svg>;
};

export default TicketHorizontal24Regular;