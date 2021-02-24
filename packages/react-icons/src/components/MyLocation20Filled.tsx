import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MyLocation20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 13a3 3 0 100-6 3 3 0 000 6zm.75-10.25a.75.75 0 00-1.5 0v1.3a6 6 0 00-5.2 5.2h-1.3a.75.75 0 000 1.5h1.3a6 6 0 005.2 5.2v1.3a.75.75 0 001.5 0v-1.3a6 6 0 005.2-5.2h1.3a.75.75 0 000-1.5h-1.3a6 6 0 00-5.2-5.2v-1.3zM10 14.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill={primaryFill} /></svg>;
};

export default MyLocation20Filled;