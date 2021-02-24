import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bed16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 6h1v-.5c0-.28.22-.5.5-.5h1.5c.28 0 .5.22.5.5V6h2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v2h2v-.5c0-.28.22-.5.5-.5H7c.28 0 .5.22.5.5V6z" fill={primaryFill} /><path d="M3.5 7A2.5 2.5 0 001 9.5v4a.5.5 0 001 0V11h12v2.5a.5.5 0 001 0v-4A2.5 2.5 0 0012.5 7h-9z" fill={primaryFill} /></svg>;
};

export default Bed16Filled;