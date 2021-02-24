import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 18.26l16.36 9.81c.4.24.89.24 1.28 0l12-7.2a7.04 7.04 0 004.36-.54v12.42C40 35.1 38.1 37 35.75 37h-25.5A4.25 4.25 0 016 32.75v-14.5zM30.67 11a6.97 6.97 0 002.18 8.64L23 25.54 6.07 15.38A5.25 5.25 0 0111.25 11h19.42zM37 9a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
};

export default MailUnread48Filled;