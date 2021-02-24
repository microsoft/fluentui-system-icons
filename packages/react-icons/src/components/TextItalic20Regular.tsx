import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextItalic20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a.5.5 0 010 1h-3.16L8.23 16h3.27a.5.5 0 010 1H4a.5.5 0 010-1h3.16l4.61-12H8.5a.5.5 0 010-1H16z" fillRule="nonzero" /></svg>;
};

export default TextItalic20Regular;