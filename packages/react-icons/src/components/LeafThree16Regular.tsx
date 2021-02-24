import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafThree16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1h2.85C12.5 1 13 1.51 13 2.15V5c0 .35-.04.68-.13 1h.89c.68 0 1.24.56 1.24 1.24v3.26a4.5 4.5 0 01-7.3 3.52l-.85.83a.5.5 0 01-.7-.7l.83-.84a4.49 4.49 0 01-.78-1.5A4 4 0 011 8V5.15C1 4.5 1.51 4 2.15 4h2.98A4 4 0 019 1zm1.85 9.85L8.4 13.3a3.5 3.5 0 005.6-2.8V7.24c0-.13-.1-.24-.24-.24H10.5a3.5 3.5 0 00-2.8 5.6l2.45-2.45a.5.5 0 01.7.7zM11.83 6A3 3 0 0012 5V2.15a.15.15 0 00-.15-.15H9a3 3 0 00-2.88 2.16 4.01 4.01 0 012.54 2.23C9.22 6.14 9.85 6 10.5 6h1.33zm-4.04.9A3 3 0 005 5H2.15a.15.15 0 00-.15.15V8a3 3 0 004.01 2.83 4.57 4.57 0 01.05-1.06L4.15 7.85a.5.5 0 11.7-.7l1.53 1.53c.32-.7.8-1.32 1.41-1.78z" fill={primaryFill} /></svg>;
};

export default LeafThree16Regular;