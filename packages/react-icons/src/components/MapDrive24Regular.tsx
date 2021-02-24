import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MapDrive24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 8a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M4.25 3C3.01 3 2 4 2 5.25v5c0 .41.34.75.75.75h8.5v2h-1a.75.75 0 00-.75.75V16H7.75a.75.75 0 00-.75.75v.75H2.75a.75.75 0 000 1.5H7v1.25c0 .42.34.75.75.75h8.5c.41 0 .75-.33.75-.75V19h4.25a.75.75 0 000-1.5H17v-.75a.75.75 0 00-.75-.75H14.5v-2.25a.75.75 0 00-.75-.75h-1v-2h8.5c.41 0 .75-.34.75-.75v-5C22 4.01 21 3 19.75 3H4.25zM3.5 5.25c0-.41.34-.75.75-.75h15.5c.41 0 .75.34.75.75V9.5h-17V5.25zM11 14.5h2v2.25c0 .42.34.75.75.75h1.75v2h-7v-2h1.75c.41 0 .75-.33.75-.75V14.5z" fill={primaryFill} /></svg>;
};

export default MapDrive24Regular;