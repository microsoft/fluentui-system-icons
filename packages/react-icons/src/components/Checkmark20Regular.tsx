import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.37 10.17a.5.5 0 00-.74.66l4 4.5c.19.22.52.23.72.02l10.5-10.5a.5.5 0 00-.7-.7L7.02 14.27l-3.65-4.1z" fill={primaryFill} /></svg>;
};

export default Checkmark20Regular;