import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Board24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 9.5V21H6.25a3.25 3.25 0 01-3.24-3.06L3 17.75V9.5h8.5zm1.5 6h8.5v2.25c0 1.8-1.45 3.25-3.25 3.25H13v-5.5zm5.25-13a3.25 3.25 0 013.25 3.06V14H13V2.5h5.25zm-6.75 0V8H3V5.75C3 3.95 4.46 2.5 6.25 2.5h5.25z" fill={primaryFill} /></svg>;
};

export default Board24Filled;