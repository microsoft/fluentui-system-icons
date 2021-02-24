import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Copy16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.09v6.41A2.5 2.5 0 006.34 13h4.57c-.2.58-.76 1-1.41 1H6a3 3 0 01-3-3V5.5c0-.65.42-1.2 1-1.41zM11.5 2c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 015 10.5v-7C5 2.67 5.67 2 6.5 2h5z" fill={primaryFill} /></svg>;
};

export default Copy16Filled;