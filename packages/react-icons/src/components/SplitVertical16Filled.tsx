import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitVertical16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM1 5c0-1.1.9-2 2-2h3v10H3a2 2 0 01-2-2V5zm8 8h3a2 2 0 002-2V5a2 2 0 00-2-2H9v10z" fill={primaryFill} /></svg>;
};

export default SplitVertical16Filled;