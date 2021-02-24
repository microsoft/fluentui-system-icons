import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const City24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 2.75a.75.75 0 00-1.5 0V4h-2c-.97 0-1.75.78-1.75 1.75V7.9c1.52-.13 3 1.04 3 2.75V22h3v-8.75a2.75 2.75 0 012.75-2.75h.25V5.75c0-.97-.78-1.75-1.75-1.75h-2V2.75z" fill={primaryFill} /><path d="M14.5 22h4.25c.97 0 1.75-.78 1.75-1.75v-7c0-.97-.78-1.75-1.75-1.75h-2.5c-.97 0-1.75.78-1.75 1.75V22z" fill={primaryFill} /><path d="M9.5 20.75V22H5.25c-.97 0-1.75-.78-1.75-1.75v-7.96c0-.59.3-1.14.79-1.46l2.5-1.64a1.75 1.75 0 012.71 1.46v10.1z" fill={primaryFill} /></svg>;
};

export default City24Filled;