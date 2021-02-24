import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ConvertToTable24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 15c.38 0 .7.28.74.65v3.6l.01.13c.06.59.53 1.06 1.12 1.12h3.73a.75.75 0 010 1.5H4.58A2.75 2.75 0 012 19.43V15.65a.75.75 0 01.75-.65zm18.5 0c.38 0 .7.28.74.65v3.6A2.75 2.75 0 0119.42 22h-3.66a.75.75 0 01-.1-1.5h3.6c.64 0 1.18-.49 1.24-1.12v-3.63c0-.41.34-.75.76-.75zm-6-9A2.75 2.75 0 0118 8.58v6.67A2.75 2.75 0 0115.42 18H8.75a2.75 2.75 0 01-2.74-2.58L6 15.25v-6.5a2.75 2.75 0 012.58-2.74L8.75 6h6.5zm1.25 5h-9v4.25c0 .65.5 1.18 1.12 1.24l.13.01h6.5c.65 0 1.18-.5 1.24-1.12l.01-.13v-4.26zm-1.25-3.5h-6.5c-.65 0-1.18.5-1.24 1.12l-.01.13v.74h9v-.74c0-.65-.5-1.18-1.12-1.24l-.13-.01zm-7-5.5a.75.75 0 01.1 1.5h-3.6c-.65 0-1.18.5-1.25 1.12v3.63a.75.75 0 01-1.5.1v-3.6a2.75 2.75 0 012.58-2.74L4.75 2h3.5zm11 0h.16A2.75 2.75 0 0122 4.59v3.77a.75.75 0 01-1.49 0V4.62a1.25 1.25 0 00-1.13-1.11l-.12-.01h-3.6a.75.75 0 010-1.5h3.6z" fill={primaryFill} /></svg>;
};

export default ConvertToTable24Regular;