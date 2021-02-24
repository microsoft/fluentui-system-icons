import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Send24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.81 12.2l-7.53 1.25a.5.5 0 00-.38.32l-2.6 6.96a.75.75 0 001.03.94l18-9a.75.75 0 000-1.34l-18-9a.75.75 0 00-1.03.94l2.6 6.96a.5.5 0 00.38.32l7.53 1.25a.2.2 0 010 .4z" fill={primaryFill} /></svg>;
};

export default Send24Filled;