import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Couch12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3a1 1 0 011-1h6a1 1 0 011 1v1.56A2 2 0 007.56 6H4.44A2 2 0 002 4.56V3z" fill={primaryFill} /><path d="M2.5 5C1.67 5 1 5.67 1 6.5V9a1 1 0 001 1h8a1 1 0 001-1V6.5a1.5 1.5 0 00-3 0H4C4 5.67 3.33 5 2.5 5z" fill={primaryFill} /></svg>;
};

export default Couch12Filled;