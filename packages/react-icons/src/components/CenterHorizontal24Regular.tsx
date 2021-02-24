import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CenterHorizontal24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3c.41 0 .75.34.75.75v16.5a.75.75 0 01-1.5 0V3.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M20.25 3a.75.75 0 00-.75.75v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-.75-.75z" fill={primaryFill} /><path d="M14.25 5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75h-4.5C8.78 19 8 18.22 8 17.25V6.75C8 5.78 8.78 5 9.75 5h4.5zm.25 1.75a.25.25 0 00-.25-.25h-4.5a.25.25 0 00-.25.25v10.5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25V6.75z" fill={primaryFill} /></svg>;
};

export default CenterHorizontal24Regular;