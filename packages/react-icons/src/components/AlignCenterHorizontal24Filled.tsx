import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterHorizontal24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 12.75a.75.75 0 000-1.5H20v-2.5c0-1.24-1-2.25-2.25-2.25h-2.5c-1.24 0-2.25 1-2.25 2.25v2.5h-2v-4.5c0-1.24-1-2.25-2.25-2.25h-2.5C5.01 4.5 4 5.5 4 6.75v4.5H2.75a.75.75 0 000 1.5H4v4.5c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25v-4.5h2v2.5c0 1.24 1 2.25 2.25 2.25h2.5c1.24 0 2.25-1 2.25-2.25v-2.5h1.25z" fill={primaryFill} /></svg>;
};

export default AlignCenterHorizontal24Filled;