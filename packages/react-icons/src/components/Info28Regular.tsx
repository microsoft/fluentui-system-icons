import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Info28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13.25 11.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-1.5 0z" fill={primaryFill} /><path d="M2 14a12 12 0 1124 0 12 12 0 01-24 0zM14 3.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z" fill={primaryFill} /></svg>;
};

export default Info28Regular;