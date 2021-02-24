import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CenterVertical24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h16.5z" fill={primaryFill} /><path d="M20.25 21a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h16.5z" fill={primaryFill} /><path d="M6.75 8C5.78 8 5 8.78 5 9.75v4.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-4.5C19 8.78 18.22 8 17.25 8H6.75zM6.5 9.75c0-.14.11-.25.25-.25h10.5c.14 0 .25.11.25.25v4.5c0 .14-.11.25-.25.25H6.75a.25.25 0 01-.25-.25v-4.5z" fill={primaryFill} /></svg>;
};

export default CenterVertical24Regular;