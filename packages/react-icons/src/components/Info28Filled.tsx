import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Info28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 14a12 12 0 1024 0 12 12 0 00-24 0zm13.25-6a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM14 11a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default Info28Filled;