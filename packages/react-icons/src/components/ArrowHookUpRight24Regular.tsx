import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpRight24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 18.5h5.75a.75.75 0 010 1.5H10.5a6.5 6.5 0 110-13h5.95l-2.62-2.62a.75.75 0 011.06-1.06l3.89 3.88c.1.1.16.23.2.35a.75.75 0 01-.21.74l-3.88 3.88a.75.75 0 11-1.06-1.06l2.6-2.61H10.5a5 5 0 000 10z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpRight24Regular;