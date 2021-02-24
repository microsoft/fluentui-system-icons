import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareAndroid24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3a3 3 0 11-2.15 5.1L9.4 11.2a3 3 0 010 1.58l5.46 3.12A2.99 2.99 0 0120 18a3 3 0 11-5.9-.79L8.66 14.1A2.99 2.99 0 013.5 12a3 3 0 015.15-2.1L14.1 6.8A3 3 0 0117 3z" fill={primaryFill} /></svg>;
};

export default ShareAndroid24Filled;