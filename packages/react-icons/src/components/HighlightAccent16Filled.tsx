import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HighlightAccent16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 4.55V2h-2v3h1.5a.5.5 0 00.5-.45zM10 5V2H3v2.5c0 .28.22.5.5.5H10zm0 4H6v4.58l3.77-2.42a.5.5 0 00.23-.36V9z" fill={primaryFill} /></svg>;
};

export default HighlightAccent16Filled;