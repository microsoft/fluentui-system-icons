import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Info24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 8.25a1 1 0 00-1 .88v5.74a1 1 0 002 0v-5.62l-.01-.12a1 1 0 00-1-.88zm0-3.75A1.25 1.25 0 1012 9a1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
};

export default Info24Filled;