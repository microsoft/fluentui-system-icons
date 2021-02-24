import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColorAccent16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
};

export default TextColorAccent16Regular;