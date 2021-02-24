import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatterySaver24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.37 4.34a.75.75 0 011.3.05C10.21 7.27 11 9.48 11 11.1c0 1.68-.6 2.97-1.83 3.79a.75.75 0 11-.83-1.25c.78-.52 1.16-1.34 1.16-2.55 0-1.06-.48-2.6-1.44-4.59l-.18-.35-.25.26c-.34.36-.73.72-1.17 1.07l-.33.27-.92.7c-1.36 1.07-1.8 1.79-1.7 3.05.1 1.14.75 1.83 2.1 2.12.62-1.35.92-2.63.9-3.84A.75.75 0 018 9.75c.02 1.46-.34 2.99-1.06 4.56a7.1 7.1 0 01-3.91 3.64.75.75 0 11-.58-1.39c.97-.4 1.74-.94 2.32-1.62-1.66-.52-2.62-1.65-2.76-3.33-.16-1.88.54-2.99 2.27-4.36l.84-.64.37-.29a8.81 8.81 0 001.87-1.98zM11.75 6H17a3 3 0 013 2.82V10l1 .02a1 1 0 011 .88v2.12a1 1 0 01-.87.99H21L20 14v1a3 3 0 01-2.82 3H6.75a.75.75 0 01-.1-1.5H17c.78 0 1.42-.6 1.5-1.36V9c0-.78-.6-1.42-1.36-1.5h-5.39a.75.75 0 01-.1-1.5H17h-5.25z" fill={primaryFill} /></svg>;
};

export default BatterySaver24Regular;