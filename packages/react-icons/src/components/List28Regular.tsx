import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const List28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 21a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h12.5zm8-7.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h20.5zm-4-7.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h16.5z" fill={primaryFill} /></svg>;
};

export default List28Regular;