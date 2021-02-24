import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.75c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0V5.5h-4.75v8.97A6.47 6.47 0 0011.5 20H8.75a.75.75 0 010-1.5h1.5v-13H5.5v1.25a.75.75 0 01-1.5 0v-2zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
};

export default TextAdd24Regular;