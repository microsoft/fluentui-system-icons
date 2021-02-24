import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ProtocolHandler16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.59 4.41L1.4 6.6a2 2 0 000 2.82L3.6 11.6a2 2 0 002.82 0L8.6 9.4a2 2 0 000-2.82L6.4 4.4a2 2 0 00-2.82 0zM2.12 7.3L4.3 5.12a1 1 0 011.42 0L7.88 7.3a1 1 0 010 1.42L5.7 10.88a1 1 0 01-1.42 0L2.12 8.7a1 1 0 010-1.42z" fill={primaryFill} /><path d="M9.59 11.59l-.88-.88.58-.59.12-.12.88.88a1 1 0 001.42 0l2.17-2.17a1 1 0 000-1.42L11.7 5.12a1 1 0 00-1.42 0L9.41 6a3.05 3.05 0 00-.12-.12l-.58-.59.88-.88a2 2 0 012.82 0L14.6 6.6a2 2 0 010 2.82L12.4 11.6a2 2 0 01-2.82 0z" fill={primaryFill} /></svg>;
};

export default ProtocolHandler16Regular;