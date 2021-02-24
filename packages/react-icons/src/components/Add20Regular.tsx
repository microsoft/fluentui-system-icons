import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 16.5a.5.5 0 001 0v-6h6a.5.5 0 000-1h-6v-6a.5.5 0 00-1 0v6h-6a.5.5 0 000 1h6v6z" fill={primaryFill} /></svg>;
};

export default Add20Regular;