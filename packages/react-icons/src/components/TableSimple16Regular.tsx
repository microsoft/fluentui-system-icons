import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSimple16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5zm1 4h4.5V13h-3A1.5 1.5 0 013 11.5v-3zm4.5-1H3v-3C3 3.67 3.67 3 4.5 3h3v4.5zm1 1H13v3c0 .83-.67 1.5-1.5 1.5h-3V8.5zm4.5-1H8.5V3h3c.83 0 1.5.67 1.5 1.5v3z" fill={primaryFill} /></svg>;
};

export default TableSimple16Regular;