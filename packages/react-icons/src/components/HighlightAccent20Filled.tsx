import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HighlightAccent20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3h-2v4h1.5a.5.5 0 00.5-.5V3zm-3 4V3H4v3.5c0 .28.22.5.5.5H13zm-6 9.7V11h6v2.07a1 1 0 01-.55.9L7 16.69z" fill={primaryFill} /></svg>;
};

export default HighlightAccent20Filled;