import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 13V3.75a.75.75 0 00-1.5 0V13H3.75a.75.75 0 000 1.5H13v9.25a.75.75 0 001.5 0V14.5h9.25a.75.75 0 000-1.5H14.5z" fill={primaryFill} /></svg>;
};

export default Add28Regular;