import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Presenter24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.24 13c.71 0 1.03.89.47 1.33L16 18.11v1.64C16 21 14.99 22 13.75 22h-3.5C9.01 22 8 21 8 19.75v-1.64l-4.72-3.78A.75.75 0 013.75 13h16.5zM8.75 9h6.5c.91 0 1.67.7 1.74 1.6V12H7v-1.25c0-.92.7-1.67 1.6-1.74L8.76 9h6.5-6.5zM12 2a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /></svg>;
};

export default Presenter24Filled;