import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingToolAccent24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 4H17v2.5h2.25c.12 0 .22-.08.24-.2V4zm-4 2.5V4h-11v2.25c0 .12.08.22.2.24h10.8zM11.62 18h.79l.03.19a4.14 4.14 0 01-.2 2.16.25.25 0 01-.46 0c-.06-.14-.1-.3-.15-.45a3.99 3.99 0 01-.05-1.71l.04-.19zm3-10l-2.64 5.95a.75.75 0 101.37.6L16.25 8h-1.63z" fill={primaryFill} /></svg>;
};

export default InkingToolAccent24Filled;