import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 24a5 5 0 1110 0 5 5 0 01-10 0z" fill={primaryFill} /><path d="M4 24a10 10 0 0110-10h20a10 10 0 010 20H14A10 10 0 014 24zm10-7.5a7.5 7.5 0 000 15h20a7.5 7.5 0 000-15H14z" fill={primaryFill} /></svg>;
};

export default ToggleLeft48Regular;