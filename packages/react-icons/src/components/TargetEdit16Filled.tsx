import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TargetEdit16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a1 1 0 100-2 1 1 0 000 2zM4.5 8a3.5 3.5 0 016.86-.98l-1.4 1.4A2 2 0 008 6a2 2 0 10.42 3.95l-1.08 1.08-.3.34A3.5 3.5 0 014.5 8zM8 3.5a4.5 4.5 0 014.18 2.83c.45-.26.97-.37 1.48-.32a6 6 0 10-7.54 7.69l.23-.91c.04-.19.1-.36.18-.54A4.5 4.5 0 018 3.5zm3.49 4.8L8.3 11.48l-.26.26a2.77 2.77 0 00-.73 1.29l-.23.9-.07.31a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29a1.56 1.56 0 00-2.09-2.31l-.11.1-.85.85z" fill={primaryFill} /></svg>;
};

export default TargetEdit16Filled;