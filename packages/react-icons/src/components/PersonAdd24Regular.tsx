import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-5.48 2c-.3.46-.53.97-.7 1.5H4.24a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46C5.3 19.76 7.26 20.5 10 20.5c.6 0 1.16-.03 1.68-.1.25.49.55.95.91 1.36-.8.16-1.66.24-2.59.24-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.43v-.58C2 15 3.01 14 4.25 14h7.77zm5.48 0h-.09a.5.5 0 00-.4.41l-.01.09V17H14.4a.5.5 0 00-.4.41v.18c.04.2.2.37.4.4l.1.01H17v2.59c.05.2.2.37.41.4l.09.01h.09a.5.5 0 00.4-.41l.01-.09V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.59a.5.5 0 00-.41-.4L17.5 14zM10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
};

export default PersonAdd24Regular;