import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ContactCardGroup28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75v12.5A3.75 3.75 0 005.75 24h16.5A3.75 3.75 0 0026 20.25V7.75A3.75 3.75 0 0022.25 4H5.75A3.75 3.75 0 002 7.75zm15 4.5c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm.75 2.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 110-1.5zM15 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-8 2.5h3.5a1 1 0 011 1v1s0 2-2.75 2-2.75-2-2.75-2v-1a1 1 0 011-1zm3.5-2.75a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zm3 5.75h-1.21a3.04 3.04 0 00.2-.97l.01-.03v-1a2 2 0 00-.27-1h2.27a1 1 0 011 1 2 2 0 01-2 2z" fill={primaryFill} /></svg>;
};

export default ContactCardGroup28Filled;