import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.91 2H6a.5.5 0 01.5.41V5.5h3a.5.5 0 01.5.41V6a.5.5 0 01-.41.5H6.5v3a.5.5 0 01-.41.5H6a.5.5 0 01-.5-.41V6.5h-3a.5.5 0 01-.5-.41V6a.5.5 0 01.41-.5H5.5v-3a.5.5 0 01.41-.5z" fill={primaryFill} /></svg>;
};

export default Add12Regular;