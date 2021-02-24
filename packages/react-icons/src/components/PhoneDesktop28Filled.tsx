import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneDesktop28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 10c1.19 0 2.16.93 2.24 2.1v11.65c0 1.2-.92 2.17-2.09 2.24l-.15.01h-5.5c-1.2 0-2.17-.93-2.24-2.1L2 23.75v-11.5c0-1.2.93-2.17 2.1-2.24l.15-.01h5.5zm-2 11.5h-1.6a.75.75 0 000 1.5H7.85a.75.75 0 000-1.5h-.1zm16-19.5c1.2 0 2.17.93 2.25 2.1v11.4c0 1.2-.92 2.17-2.1 2.24l-.15.01H19v2.75h1.25a.75.75 0 01.1 1.5H13v-1.5h4.5v-2.75H13V11.5A2.5 2.5 0 0010.66 9H5V4.25c0-1.2.93-2.17 2.1-2.24L7.25 2h16.5z" fill={primaryFill} /></svg>;
};

export default PhoneDesktop28Filled;