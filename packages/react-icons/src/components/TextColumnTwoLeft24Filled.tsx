import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnTwoLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 6a1 1 0 00-1-1H4a1 1 0 000 2h3a1 1 0 001-1z" fill={primaryFill} /><path d="M21 10a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 10a1 1 0 00-1-1H4a1 1 0 000 2h3a1 1 0 001-1z" fill={primaryFill} /><path d="M21 14a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 14a1 1 0 00-1-1H4a1 1 0 100 2h3a1 1 0 001-1z" fill={primaryFill} /><path d="M21 18a1 1 0 00-1-1h-9a1 1 0 100 2h9a1 1 0 001-1z" fill={primaryFill} /><path d="M8 18a1 1 0 00-1-1H4a1 1 0 100 2h3a1 1 0 001-1z" fill={primaryFill} /></svg>;
};

export default TextColumnTwoLeft24Filled;