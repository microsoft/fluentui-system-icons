import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SearchVisual16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75A2.75 2.75 0 014.75 2h.5a.75.75 0 010 1.5h-.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 01-1.5 0v-.5z" fill={primaryFill} /><path d="M14 11.25A2.75 2.75 0 0111.25 14h-.5a.75.75 0 010-1.5h.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 011.5 0v.5z" fill={primaryFill} /><path d="M14 4.75A2.75 2.75 0 0011.25 2h-.5a.75.75 0 000 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5z" fill={primaryFill} /><path d="M4.75 14A2.75 2.75 0 012 11.25v-.5a.75.75 0 011.5 0v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 010 1.5h-.5z" fill={primaryFill} /><path d="M8 10a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M5.25 6a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default SearchVisual16Filled;