import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPerson16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 7a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H2.75C1.78 13 1 12.22 1 11.25v-6.5zM11 12h2.25c.41 0 .75-.34.75-.75v-6.5a.75.75 0 00-.75-.75H2.75a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75H5v-1a1 1 0 011-1h4a1 1 0 011 1v1z" fill={primaryFill} /></svg>;
};

export default VideoPerson16Filled;