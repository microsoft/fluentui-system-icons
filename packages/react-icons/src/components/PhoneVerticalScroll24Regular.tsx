import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneVerticalScroll24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm0 1.5h-7.5a.75.75 0 00-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 00-.75-.75zm-.97 9.96c.26.27.3.68.08.98l-.07.09-2.25 2.3c-.27.26-.7.29-1 .07l-.08-.08-2.25-2.3a.75.75 0 01.99-1.12l.08.07L12 15.22l1.71-1.75c.3-.3.77-.3 1.06 0zm-2.24-6.23l2.25 2.3a.75.75 0 11-1.08 1.04L12 8.82l-1.72 1.75a.75.75 0 01-1.07-1.05l2.25-2.3c.3-.3.78-.3 1.08 0z" fill={primaryFill} /></svg>;
};

export default PhoneVerticalScroll24Regular;