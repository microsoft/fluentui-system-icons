import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSwap20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.78 3.22a.75.75 0 10-1.06 1.06L13.44 6H4.75a.75.75 0 000 1.5h8.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3z" fill={primaryFill} /><path d="M8.28 10.78a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06L6.56 14h8.69a.75.75 0 000-1.5H6.56l1.72-1.72z" fill={primaryFill} /></svg>;
};

export default ArrowSwap20Filled;