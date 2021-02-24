import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 13.5h-4a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0V12h3.25a.75.75 0 010 1.5zM12 2a10 10 0 100 20 10 10 0 000-20z" fill={primaryFill} /></svg>;
};

export default Clock24Filled;