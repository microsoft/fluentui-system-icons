import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorLineAccent16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 11.41a1.75 1.75 0 001.97.78l2.4-.66c.38-.1.75-.29 1.07-.53h6.06c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-2a.5.5 0 010-.09z" fill={primaryFill} /></svg>;
};

export default ColorLineAccent16Regular;