import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3.25c-.97 0-1.75.78-1.75 1.75v3.25H5c-.97 0-1.75.78-1.75 1.75v4c0 .97.78 1.75 1.75 1.75h3.25V19c0 .97.78 1.75 1.75 1.75h4c.97 0 1.75-.78 1.75-1.75v-3.25H19c.97 0 1.75-.78 1.75-1.75v-4c0-.97-.78-1.75-1.75-1.75h-3.25V5c0-.97-.78-1.75-1.75-1.75h-4z" fill={primaryFill} /></svg>;
};

export default Doctor24Filled;