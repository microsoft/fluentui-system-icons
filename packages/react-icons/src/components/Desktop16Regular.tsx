import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Desktop16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h2v1H4.5a.5.5 0 000 1h7a.5.5 0 100-1H10v-1h2a2 2 0 002-2V4a2 2 0 00-2-2H4zm5 10v1H7v-1h2zM3 4a1 1 0 011-1h8a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" fill={primaryFill} /></svg>;
};

export default Desktop16Regular;