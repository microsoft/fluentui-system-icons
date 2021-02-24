import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 14a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill={primaryFill} /><path d="M16.25 14a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill={primaryFill} /><path d="M22 16.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal28Regular;