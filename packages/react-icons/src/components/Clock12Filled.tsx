import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a5 5 0 110 10A5 5 0 016 1zm-.5 2.5A.5.5 0 005 4v2.5c0 .28.22.5.5.5h2a.5.5 0 000-1H6V4a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default Clock12Filled;