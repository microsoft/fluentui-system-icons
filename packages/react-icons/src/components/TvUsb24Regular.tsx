import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TvUsb24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 3A2.75 2.75 0 002 5.75v8.5A2.75 2.75 0 004.75 17h9.75v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25V8.5h.5c.36 0 .7.07 1 .2V5.76A2.75 2.75 0 0019.25 3H4.75zm1 15.5h9l.16.28.8 1.22H5.75a.75.75 0 010-1.5zM17.5 20l-1.34-2.04a1 1 0 01-.16-.55V14a1 1 0 011-1v-2a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 011 1v3.44a1 1 0 01-.17.55L21.5 20v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm3-8.5h-2V13h2v-1.5z" fill={primaryFill} /></svg>;
};

export default TvUsb24Regular;