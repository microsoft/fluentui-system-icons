import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10a.5.5 0 000-1h-15a.5.5 0 000 1h15zM16 4a2 2 0 00-2-2H6a2 2 0 00-2 2v4h1V4a1 1 0 011-1h8a1 1 0 011 1v4h1V4zm0 7h-1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4H4v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-4z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal20Regular;