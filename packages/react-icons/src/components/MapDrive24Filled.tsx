import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MapDrive24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 4.01 3 3 4.25 3h15.5C20.99 3 22 4 22 5.25v5c0 .41-.34.75-.75.75h-8.5v2h1c.41 0 .75.34.75.75V16h1.75c.41 0 .75.34.75.75v.75h4.25a.75.75 0 010 1.5H17v1.25c0 .42-.34.75-.75.75h-8.5a.75.75 0 01-.75-.75V19H2.75a.75.75 0 010-1.5H7v-.75c0-.41.34-.75.75-.75H9.5v-2.25c0-.41.34-.75.75-.75h1v-2h-8.5a.75.75 0 01-.75-.75v-5zM18 8a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default MapDrive24Filled;