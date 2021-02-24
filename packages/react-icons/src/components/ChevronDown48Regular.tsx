import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronDown48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.37 16.12a1.25 1.25 0 000 1.76l14.75 14.75c.48.5 1.28.5 1.76 0l14.75-14.75a1.25 1.25 0 00-1.76-1.76L24 29.98 10.13 16.12a1.25 1.25 0 00-1.76 0z" fill={primaryFill} /></svg>;
};

export default ChevronDown48Regular;