import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TableSimple28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3h14.5A3.75 3.75 0 0125 6.75v14.5A3.75 3.75 0 0121.25 25H6.75A3.75 3.75 0 013 21.25V6.75A3.75 3.75 0 016.75 3zm6.5 1.5h-6.5c-1.24 0-2.25 1-2.25 2.25v6.5h8.75V4.5zM4.5 14.75v6.5c0 1.24 1 2.25 2.25 2.25h6.5v-8.75H4.5zm10.25 8.75h6.5c1.24 0 2.25-1 2.25-2.25v-6.5h-8.75v8.75zm8.75-10.25v-6.5c0-1.24-1-2.25-2.25-2.25h-6.5v8.75h8.75z" fill={primaryFill} /></svg>;
};

export default TableSimple28Regular;