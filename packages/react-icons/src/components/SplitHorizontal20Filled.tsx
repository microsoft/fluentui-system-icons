import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10a.5.5 0 000-1h-15a.5.5 0 000 1h15zM14 2a2 2 0 012 2v4H4V4c0-1.1.9-2 2-2h8zM4 11v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-4H4z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal20Filled;