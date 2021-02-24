import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Poll24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2a2.75 2.75 0 012.75 2.75v14.5a2.75 2.75 0 11-5.5 0V4.75A2.75 2.75 0 0111.75 2zm7 5a2.75 2.75 0 012.75 2.75v9.5a2.75 2.75 0 11-5.5 0v-9.5A2.75 2.75 0 0118.75 7zm-14 5a2.75 2.75 0 012.75 2.75v4.5a2.75 2.75 0 01-5.5 0v-4.5A2.75 2.75 0 014.75 12zm7-8.5c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 002.5 0V4.75c0-.69-.56-1.25-1.25-1.25zm7 5c-.69 0-1.25.56-1.25 1.25v9.5a1.25 1.25 0 002.5 0v-9.5c0-.69-.56-1.25-1.25-1.25zm-14 5c-.69 0-1.25.56-1.25 1.25v4.5a1.25 1.25 0 102.5 0v-4.5c0-.69-.56-1.25-1.25-1.25z" fill={primaryFill} /></svg>;
};

export default Poll24Regular;