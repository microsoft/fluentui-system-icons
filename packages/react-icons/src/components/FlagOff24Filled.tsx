import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2.5l18 18a.75.75 0 01-1.06 1.06l-5.06-5.06H4.5v4.75c0 .38-.28.7-.65.74h-.1a.75.75 0 01-.74-.64l-.01-.1V5.12L1.44 3.56A.75.75 0 112.5 2.5zm2.62.5h15.13c.62 0 .98.7.6 1.2L16.7 9.75l4.16 5.55c.38.5.02 1.2-.6 1.2h-1.63L5.12 3z" fill={primaryFill} /></svg>;
};

export default FlagOff24Filled;