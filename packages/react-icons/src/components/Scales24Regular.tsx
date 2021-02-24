import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Scales24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75c0-.41.34-.75.75-.75h16.5a.75.75 0 010 1.5h-1.04l2.73 6.72c.04.09.06.18.06.28a3.5 3.5 0 11-7 0c0-.1.02-.2.06-.28l2.73-6.72h-5.04v12h4a2.25 2.25 0 010 4.5h-9.5a2.25 2.25 0 010-4.5h4v-12H6.21l2.73 6.72c.04.09.06.18.06.28a3.5 3.5 0 11-7 0c0-.1.02-.2.06-.28L4.79 4.5H3.75A.75.75 0 013 3.75zm3.5 15c0 .41.34.75.75.75h9.5a.75.75 0 000-1.5h-9.5a.75.75 0 00-.75.75zm.85-6.5h-3.7a2 2 0 003.7 0zm-.22-1.5L5.5 6.74l-1.63 4.01h3.26zM18.5 13.5a2 2 0 001.85-1.25h-3.7a2 2 0 001.85 1.25zm-1.63-2.75h3.26L18.5 6.74l-1.63 4.01z" fill={primaryFill} /></svg>;
};

export default Scales24Regular;