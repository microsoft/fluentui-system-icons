import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Send16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.18 1.12a.5.5 0 01.54-.07l13 6.5a.5.5 0 010 .9l-13 6.5a.5.5 0 01-.7-.6L2.98 8 1.02 1.65a.5.5 0 01.16-.53zM3.87 8.5l-1.55 5.03L13.38 8 2.32 2.47 3.87 7.5H9.5a.5.5 0 010 1H3.87z" fill={primaryFill} /></svg>;
};

export default Send16Regular;