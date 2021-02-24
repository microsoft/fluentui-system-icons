import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zM22 6.6v6.21A6.5 6.5 0 0011.02 18H5.25a3.25 3.25 0 01-3.24-3.07L2 14.75V6.61l9.65 5.05c.22.12.48.12.7 0L22 6.61zM18.75 2a3.25 3.25 0 013.23 2.92L12 10.15 2.02 4.92a3.25 3.25 0 013.04-2.91L5.25 2h13.5z" fill={primaryFill} /></svg>;
};

export default MailAdd24Filled;