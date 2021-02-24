import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextField24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A3.75 3.75 0 015.75 4h12.5A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5zM8.25 7a.75.75 0 00-.75.75v1.5a.75.75 0 101.5 0V8.5h2.25v7h-.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-.5v-7H15v.75a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75h-7.5z" fill={primaryFill} /></svg>;
};

export default TextField24Filled;