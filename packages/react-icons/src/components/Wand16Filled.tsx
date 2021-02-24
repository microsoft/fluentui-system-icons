import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wand16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 1.5a.5.5 0 00-1 0V2h-.5a.5.5 0 000 1h.5v.5a.5.5 0 001 0V3h.5a.5.5 0 000-1H14v-.5z" fill={primaryFill} /><path d="M4 3.5a.5.5 0 00-1 0V4h-.5a.5.5 0 000 1H3v.5a.5.5 0 001 0V5h.5a.5.5 0 000-1H4v-.5z" fill={primaryFill} /><path d="M13 11.5a.5.5 0 01-.5.5H12v.5a.5.5 0 01-1 0V12h-.5a.5.5 0 010-1h.5v-.5a.5.5 0 011 0v.5h.5c.28 0 .5.22.5.5z" fill={primaryFill} /><path d="M8.73 4.56a1.91 1.91 0 012.7 2.71l-.47.48-2.71-2.7.48-.49z" fill={primaryFill} /><path d="M7.54 5.75l2.71 2.7-5.98 5.99a1.91 1.91 0 01-2.71-2.7l5.98-5.99z" fill={primaryFill} /></svg>;
};

export default Wand16Filled;