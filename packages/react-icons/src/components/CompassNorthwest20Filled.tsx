import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CompassNorthwest20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.06 9A8 8 0 0110 2v1.5a.5.5 0 001 0V2.06A8 8 0 0117.94 9H16.5a.5.5 0 000 1H18a8 8 0 01-7 7.94V16.5a.5.5 0 00-1 0V18a8 8 0 01-8-8h1.5a.5.5 0 000-1H2.06zm10.1.48a3 3 0 00-1.65-1.6l-3.49-1.4a.42.42 0 00-.54.54l1.4 3.49a3 3 0 001.6 1.65l3.73 1.6c.34.14.7-.2.55-.55l-1.6-3.73z" fill={primaryFill} /></svg>;
};

export default CompassNorthwest20Filled;