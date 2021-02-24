import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.25 1.25A3.25 3.25 0 002 7.25v9.68A3.25 3.25 0 005.26 20h13.68l1.79 1.78a.75.75 0 001.06-1.06L3.28 2.22zM17.44 18.5H5.1c-.9-.08-1.61-.83-1.61-1.75V9.37l8.15 4.3.1.04c.2.07.41.05.6-.05l.17-.08 4.92 4.92zm-7.36-7.36L3.5 7.68V7.1c.06-.67.49-1.23 1.07-1.47l5.51 5.5z" fill={primaryFill} /><path d="M20.5 7.68L14.18 11l1.11 1.11 5.21-2.74v7.52l-.07.36 1.13 1.13c.28-.48.44-1.04.44-1.63V7.07A3.25 3.25 0 0018.74 4H7.18l1.5 1.5H18.9c.9.08 1.61.83 1.61 1.75v.43z" fill={primaryFill} /></svg>;
};

export default MailOff24Regular;