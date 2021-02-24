import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSimple48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10.75A4.75 4.75 0 0110.75 6h12v16.75H6v-12z" fill={primaryFill} /><path d="M6 25.25v12A4.75 4.75 0 0010.75 42h12V25.25H6z" fill={primaryFill} /><path d="M25.25 42h12A4.75 4.75 0 0042 37.25v-12H25.25V42z" fill={primaryFill} /><path d="M42 22.75v-12A4.75 4.75 0 0037.25 6h-12v16.75H42z" fill={primaryFill} /></svg>;
};

export default TableSimple48Filled;