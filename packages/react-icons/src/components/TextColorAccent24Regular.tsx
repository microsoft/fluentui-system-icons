import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColorAccent24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 16.75c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H5.25a.75.75 0 01-.75-.75v-3z" fill={primaryFill} /></svg>;
};

export default TextColorAccent24Regular;