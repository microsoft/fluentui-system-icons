import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Remote16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 2.85a.5.5 0 00-.7-.7l-4.5 4.5a.5.5 0 000 .7l4.5 4.5a.5.5 0 00.7-.7L9.71 7l4.14-4.15zm-11 1.3a.5.5 0 10-.7.7L6.29 9l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5z" fill={primaryFill} /></svg>;
};

export default Remote16Regular;