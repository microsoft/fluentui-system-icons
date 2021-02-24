import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const IosArrowLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 12l8.49-8.73a.75.75 0 10-1.08-1.04l-9 9.25a.75.75 0 000 1.04l9 9.25a.75.75 0 101.08-1.04L4.29 12z" fill={primaryFill} /></svg>;
};

export default IosArrowLeft24Regular;