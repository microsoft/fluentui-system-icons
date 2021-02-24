import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Dismiss28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.15 3.39l.11-.13a1.75 1.75 0 012.35-.11l.13.11L14 11.53l8.26-8.27a1.75 1.75 0 112.48 2.48L16.48 14l8.26 8.26c.64.65.68 1.67.11 2.35l-.11.13c-.65.64-1.67.68-2.35.11l-.13-.11L14 16.48l-8.26 8.26a1.75 1.75 0 11-2.48-2.48L11.53 14 3.26 5.74a1.75 1.75 0 01-.11-2.35l.11-.13-.11.13z" fill={primaryFill} /></svg>;
};

export default Dismiss28Filled;