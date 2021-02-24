import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronUp48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.63 31.88c-.48.5-1.28.5-1.76 0L24 18.02 10.13 31.88a1.25 1.25 0 01-1.76-1.76l14.75-14.75a1.25 1.25 0 011.76 0l14.75 14.75c.5.48.5 1.28 0 1.76z" fill={primaryFill} /></svg>;
};

export default ChevronUp48Regular;