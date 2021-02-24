import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChannelAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3A3.25 3.25 0 0121 6.07V12.02c-.46-.3-.97-.53-1.5-.7V6.24c0-.92-.7-1.67-1.6-1.74l-.15-.01H6.25c-.6 0-1.13.3-1.44.76a2.23 2.23 0 00-1.59-.2 3.25 3.25 0 012.85-2.05L6.25 3h11.5z" fill={primaryFill} /><path d="M11.31 19.5c.18.53.42 1.04.71 1.5H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 001.5 0v8.38c0 .92.7 1.67 1.6 1.74l.15.01h5.06z" fill={primaryFill} /><path d="M11.73 14.5c.29-.55.65-1.05 1.08-1.5H8.75l-.1.01a.75.75 0 00.1 1.5h2.98z" fill={primaryFill} /><path d="M15.25 9.5a.75.75 0 01.1 1.49h-6.6a.75.75 0 01-.1-1.49h6.6z" fill={primaryFill} /><path d="M3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" fill={primaryFill} /></svg>;
};

export default ChannelAdd24Regular;