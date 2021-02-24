import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 13h-9V4a1 1 0 10-2 0v9H4a1 1 0 100 2h9v9a1 1 0 102 0v-9h9a1 1 0 100-2z" fill={primaryFill} /></svg>;
};

export default Add28Filled;