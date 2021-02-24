import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowForward16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 3.68l3.53 3.54c.3.3.3.77 0 1.06l-3.53 3.54a.75.75 0 01-1.06-1.06l2.25-2.26H2.75a.75.75 0 01-.74-.65L2 7.75c0-.41.34-.75.75-.75h8.69L9.19 4.75a.75.75 0 111.06-1.07z" fill={primaryFill} /></svg>;
};

export default ArrowForward16Filled;