import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const UninstallApp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.61 15.21l.1.08 1.79 1.8 1.8-1.8a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-1.8 1.79 1.8 1.8a1 1 0 01.08 1.31l-.08.1a1 1 0 01-1.32.08l-.1-.08-1.79-1.8-1.8 1.8a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 1.8-1.79-1.8-1.8a1 1 0 01-.08-1.31l.08-.1a1 1 0 011.22-.15l.1.07zM18.5 3A2.5 2.5 0 0121 5.5v5a2.5 2.5 0 01-2.5 2.5H13v5.5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013 18.5v-13A2.5 2.5 0 015.5 3h13zM5 13v5.5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5V13H5zm6-8H5.5a.5.5 0 00-.5.5V11h6V5zm7.5 0H13v6h5.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default UninstallApp24Filled;