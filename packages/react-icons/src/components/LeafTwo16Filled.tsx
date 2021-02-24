import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafTwo16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.17 2C1.52 2 1 2.52 1 3.17v3a4.17 4.17 0 004.31 4.17 5.5 5.5 0 01-.08-3.4L4.15 5.84a.5.5 0 11.7-.7l.79.78a5.52 5.52 0 012.69-2.48A4.16 4.16 0 005.17 2h-3z" fill={primaryFill} /><path d="M6.98 11.3L5.2 13.1a.5.5 0 00.7.7l1.8-1.78A4.5 4.5 0 0015 8.5V5.23C15 4.55 14.45 4 13.77 4H10.5a4.5 4.5 0 00-3.52 7.3zm3.88-2.45L8.4 11.3c-.26-.2-.5-.44-.7-.7l2.45-2.46a.5.5 0 11.7.7z" fill={primaryFill} /></svg>;
};

export default LeafTwo16Filled;