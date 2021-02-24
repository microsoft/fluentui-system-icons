import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafOne20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.07 2.46l3.24 3.3A6.03 6.03 0 0110.5 16v1.5a.5.5 0 11-1 0V16A6.03 6.03 0 015.69 5.76l3.24-3.3a1.5 1.5 0 012.14 0zm-.57 12.53a5.03 5.03 0 003.1-8.52l-3.24-3.31a.5.5 0 00-.72 0L6.4 6.46A5.03 5.03 0 009.5 15v-5.5a.5.5 0 111 0V15z" fill={primaryFill} /></svg>;
};

export default LeafOne20Regular;