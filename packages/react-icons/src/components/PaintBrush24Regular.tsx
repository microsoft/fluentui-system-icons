import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaintBrush24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 2a.75.75 0 00-.75.75v11.5c0 1.24 1 2.25 2.25 2.25H9.5v3a2.5 2.5 0 105 0v-3h2.25c1.24 0 2.25-1 2.25-2.25V2.75a.75.75 0 00-.75-.75H5.75zm.75 9V3.5h6v1.75a.75.75 0 101.5 0V3.5h1v2.75a.75.75 0 101.5 0V3.5h1V11h-11zm0 3.25V12.5h11v1.75c0 .41-.34.75-.75.75h-3a.75.75 0 00-.75.75v3.75a1 1 0 01-2 0v-3.75a.75.75 0 00-.75-.75h-3a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default PaintBrush24Regular;