import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Flag16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 10h9a.5.5 0 00.4-.8L11.12 6l2.3-3.2A.5.5 0 0013 2H3.5a.5.5 0 00-.5.5v11a.5.5 0 001 0V10z" fill={primaryFill} /></svg>;
};

export default Flag16Filled;