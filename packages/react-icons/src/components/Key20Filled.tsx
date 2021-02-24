import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Key20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7.5C7 4.42 9.42 2 12.5 2S18 4.42 18 7.5 15.58 13 12.5 13c-.5 0-1-.05-1.5-.18V13a1 1 0 01-1 1H9v1a1 1 0 01-1 1H7v.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 012 16.5v-1.59c0-.4.16-.78.44-1.06l4.54-4.54c.13-.13.2-.37.14-.64A5.62 5.62 0 017 7.5zM15 6a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
};

export default Key20Filled;