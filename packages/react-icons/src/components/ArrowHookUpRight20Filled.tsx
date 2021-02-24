import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6c.06 0-.06 0 0 0h4.65l-2.27-2.27a.75.75 0 111.06-1.06l3.35 3.35c.17.18.24.42.21.64a.75.75 0 01-.21.45l-3.25 3.24a.75.75 0 11-1.06-1.06l1.8-1.79H9a3.5 3.5 0 100 7h4.25a.75.75 0 010 1.5H9A5 5 0 019 6z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpRight20Filled;