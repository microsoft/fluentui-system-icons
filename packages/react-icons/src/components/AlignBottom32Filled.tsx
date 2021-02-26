import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignBottom32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 29a1 1 0 110-2h24a1 1 0 110 2H4zm1-7.5A3.5 3.5 0 008.5 25h3a3.5 3.5 0 003.5-3.5v-15A3.5 3.5 0 0011.5 3h-3A3.5 3.5 0 005 6.5v15zm12 0a3.5 3.5 0 003.5 3.5h3a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0023.5 9h-3a3.5 3.5 0 00-3.5 3.5v9z" fill={primaryFill} /></svg>;
};

export default AlignBottom32Filled;