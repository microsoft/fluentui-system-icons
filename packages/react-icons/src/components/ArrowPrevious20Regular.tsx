import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowPrevious20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5a.5.5 0 00-.5.41v9.09a.5.5 0 001 .09V5.5A.5.5 0 006 5zm7.85.15a.5.5 0 00-.63-.06l-.07.06-4.5 4.5a.5.5 0 00-.06.63l.06.07 4.5 4.5a.5.5 0 00.76-.63l-.06-.07L9.71 10l4.14-4.15a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
};

export default ArrowPrevious20Regular;