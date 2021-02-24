import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowLeft28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.73 4.2a.75.75 0 011.04 1.1L5.5 13.24h18.75a.75.75 0 010 1.5H5.5l8.27 7.96a.75.75 0 01-1.04 1.08l-9.42-9.07a1 1 0 010-1.44l9.42-9.07z" fill={primaryFill} /></svg>;
};

export default ArrowLeft28Regular;