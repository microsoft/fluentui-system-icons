import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MatchAppLayout24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 8c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 16 2 15.22 2 14.25v-4.5c0-.92.7-1.67 1.6-1.74L3.76 8H9.5zm10.75 0c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75H14.5c-.97 0-1.75-.78-1.75-1.75v-4.5c0-.97.78-1.75 1.75-1.75h5.75z" fill={primaryFill} /></svg>;
};

export default MatchAppLayout24Filled;