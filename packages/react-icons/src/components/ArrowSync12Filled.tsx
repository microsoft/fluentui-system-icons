import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSync12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.58 2.92a.6.6 0 010-.84L5.83.83a.6.6 0 01.84.84l-.24.25A4.1 4.1 0 019.18 8.6a.6.6 0 01-.93-.76 2.9 2.9 0 00-1.76-4.7l.18.2a.6.6 0 01-.84.84L4.58 2.92z" fill={primaryFill} /><path d="M3.87 3.16c.24.22.25.6.03.84A2.9 2.9 0 005.5 8.86l-.18-.19a.6.6 0 01.84-.84l1.25 1.25a.6.6 0 010 .84l-1.25 1.25a.6.6 0 01-.84-.84l.24-.25a4.1 4.1 0 01-2.54-6.9.6.6 0 01.84-.02z" fill={primaryFill} /></svg>;
};

export default ArrowSync12Filled;