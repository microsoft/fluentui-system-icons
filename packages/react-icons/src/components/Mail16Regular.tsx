import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mail16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.04V11c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v1.04zM4 4h8a1 1 0 011 1v.74l-5 2.7-5-2.7V5a1 1 0 011-1zM3 6.88l4.76 2.56a.5.5 0 00.48 0L13 6.88V11a1 1 0 01-1 1H4a1 1 0 01-1-1V6.88z" fill={primaryFill} /></svg>;
};

export default Mail16Regular;