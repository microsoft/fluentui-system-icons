import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.75c0-.41.34-.75.75-.75h3c1.18 0 2.13.41 2.79 1.09.65.66.96 1.54.96 2.41 0 .87-.31 1.75-.96 2.41A3.78 3.78 0 018.75 11H5.56l.72.72a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06l2-2a.75.75 0 011.06 1.06l-.72.72h3.19c.82 0 1.37-.28 1.71-.63.35-.37.54-.86.54-1.37 0-.5-.19-1-.54-1.37-.34-.35-.9-.63-1.71-.63h-3A.75.75 0 015 4.75z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownLeft16Filled;