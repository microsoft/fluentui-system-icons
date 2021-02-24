import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronRight48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.12 39.63a1.25 1.25 0 010-1.76L29.98 24 16.12 10.13a1.25 1.25 0 011.76-1.76l14.75 14.75c.5.48.5 1.28 0 1.76L17.88 39.63c-.48.5-1.28.5-1.76 0z" fill={primaryFill} /></svg>;
};

export default ChevronRight48Regular;