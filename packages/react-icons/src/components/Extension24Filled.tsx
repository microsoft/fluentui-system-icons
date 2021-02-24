import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Extension24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2c1.36 0 2.47 1.1 2.47 2.47V5H19a1 1 0 011 1v3.5h-1.53a2.47 2.47 0 00-2.46 2.3l-.01.17v.06c0 1.31 1.02 2.38 2.3 2.46l.17.01H20V18a1 1 0 01-1 1h-3.53v.53a2.47 2.47 0 11-4.94 0V19H7a1 1 0 01-1-1v-3.53h-.53a2.47 2.47 0 010-4.94H6V6a1 1 0 011-1h3.53v-.53C10.53 3.11 11.63 2 13 2z" fill={primaryFill} /></svg>;
};

export default Extension24Filled;