import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Play24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.6 4.61a.75.75 0 00-1.1.66v13.46c0 .56.6.93 1.1.65l12.37-6.72a.75.75 0 000-1.32L7.61 4.61zM5 5.27c0-1.7 1.83-2.79 3.33-1.97l12.36 6.72a2.25 2.25 0 010 3.96L8.33 20.7A2.25 2.25 0 015 18.73V5.27z" fill={primaryFill} /></svg>;
};

export default Play24Regular;