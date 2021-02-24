import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneVerticalScroll24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm-2.04 11.47L12 15.22l-1.72-1.75a.75.75 0 00-1.07 1.06l2.25 2.3c.3.3.78.3 1.08 0l2.25-2.3a.75.75 0 10-1.08-1.05zm1.08-3.95l-2.25-2.3a.75.75 0 00-1-.07l-.08.07-2.25 2.3a.75.75 0 00.99 1.12l.08-.07L12 8.82l1.71 1.75a.75.75 0 001.15-.96l-.07-.09-2.25-2.3 2.25 2.3z" fill={primaryFill} /></svg>;
};

export default PhoneVerticalScroll24Filled;