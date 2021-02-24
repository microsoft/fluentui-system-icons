import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InkingTool16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 1a1 1 0 00-1 1v.4a.5.5 0 000 .1v1C1 4.33 1.67 5 2.5 5h11c.83 0 1.5-.67 1.5-1.5V2a1 1 0 00-1-1H2z" fill={primaryFill} /><path d="M6.5 13c.02.41.12.86.32 1.23.21.39.6.76 1.17.77H8c.58 0 .97-.38 1.18-.77.2-.37.3-.82.31-1.23H6.51z" fill={primaryFill} /><path d="M9.98 11.45L12.74 6H3.26l2.76 5.45a1 1 0 00.89.55h2.18a1 1 0 00.89-.55z" fill={primaryFill} /></svg>;
};

export default InkingTool16Filled;