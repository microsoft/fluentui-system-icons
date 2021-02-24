import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TetrisApp16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.75c0-.41.34-.75.75-.75H9v3H6V2.75zM2.75 6a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75H5V6H2.75zM9 6H6v3h2.25c.41 0 .75-.34.75-.75V6zm3.25-4H10v3h2.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 00-.75-.75zM3 11.75c0-.41.34-.75.75-.75H6v3H3.75a.75.75 0 01-.75-.75v-1.5zm7-.75H7v3h3v-3zm1 0h3v2.25c0 .41-.34.75-.75.75H11v-3zm.75-4a.75.75 0 00-.75.75V10h3V7.75a.75.75 0 00-.75-.75h-1.5z" fill={primaryFill} /></svg>;
};

export default TetrisApp16Filled;