import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignLeft32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a1 1 0 012 0v24a1 1 0 11-2 0V4zm7.5 1A3.5 3.5 0 007 8.5v3a3.5 3.5 0 003.5 3.5h15a3.5 3.5 0 003.5-3.5v-3A3.5 3.5 0 0025.5 5h-15zM9 8.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 019 11.5v-3zm1.5 8.5A3.5 3.5 0 007 20.5v3a3.5 3.5 0 003.5 3.5h9a3.5 3.5 0 003.5-3.5v-3a3.5 3.5 0 00-3.5-3.5h-9zM9 20.5c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 019 23.5v-3z" fill={primaryFill} /></svg>;
};

export default AlignLeft32Regular;