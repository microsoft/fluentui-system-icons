import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreVertical48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 15.75a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" fill={primaryFill} /><path d="M24 27.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" fill={primaryFill} /><path d="M20.75 35.5a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z" fill={primaryFill} /></svg>;
};

export default MoreVertical48Regular;