import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterHorizontal28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 13.75c0 .41-.34.75-.75.75H23V18a2.75 2.75 0 01-2.75 2.75h-2.5A2.75 2.75 0 0115 18v-3.5h-2v6.25a2.75 2.75 0 01-2.75 2.75h-2.5A2.75 2.75 0 015 20.75V14.5H2.75a.75.75 0 010-1.5H5V7.25A2.75 2.75 0 017.75 4.5h2.5A2.75 2.75 0 0113 7.25V13h2v-3a2.75 2.75 0 012.75-2.75h2.5A2.75 2.75 0 0123 10v3h2.25c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
};

export default AlignCenterHorizontal28Filled;