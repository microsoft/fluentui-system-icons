import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const New24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 4c.41 0 .75.34.75.75v8.5a.75.75 0 01-1.5 0v-8.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M4 18.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M8.28 7.22a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 101.06-1.06l-6.5-6.5z" fill={primaryFill} /></svg>;
};

export default New24Regular;