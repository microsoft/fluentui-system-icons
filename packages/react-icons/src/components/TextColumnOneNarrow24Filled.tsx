import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnOneNarrow24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5a1 1 0 000 2h6a1 1 0 100-2H9z" fill={primaryFill} /><path d="M9 9a1 1 0 000 2h6a1 1 0 100-2H9z" fill={primaryFill} /><path d="M8 14a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9 17a1 1 0 100 2h6a1 1 0 100-2H9z" fill={primaryFill} /></svg>;
};

export default TextColumnOneNarrow24Filled;