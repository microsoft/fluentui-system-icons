import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignCenterHorizontal32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M30 16a1 1 0 01-1 1h-2v3.5a3.5 3.5 0 01-3.5 3.5h-3a3.5 3.5 0 01-3.5-3.5V17h-2v6.5a3.5 3.5 0 01-3.5 3.5h-3A3.5 3.5 0 015 23.5V17H3a1 1 0 110-2h2V8.5A3.5 3.5 0 018.5 5h3A3.5 3.5 0 0115 8.5V15h2v-3.5A3.5 3.5 0 0120.5 8h3a3.5 3.5 0 013.5 3.5V15h2a1 1 0 011 1z" fill={primaryFill} /></svg>;
};

export default AlignCenterHorizontal32Filled;