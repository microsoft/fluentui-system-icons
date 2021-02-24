import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Table32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9a5 5 0 015-5h14a5 5 0 015 5v14a5 5 0 01-5 5H9a5 5 0 01-5-5V9zm5-3a3 3 0 00-3 3v2h5V6H9zm4 0v5h6V6h-6zm0 7v6h6v-6h-6zm-2 6v-6H6v6h5zm-5 2v2a3 3 0 003 3h2v-5H6zm7 0v5h6v-5h-6zm8 0v5h2a3 3 0 003-3v-2h-5zm5-2v-6h-5v6h5zM21 6v5h5V9a3 3 0 00-3-3h-2z" fill={primaryFill} /></svg>;
};

export default Table32Regular;