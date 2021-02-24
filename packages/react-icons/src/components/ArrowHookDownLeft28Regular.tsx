import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownLeft28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6.75c0-.41.34-.75.75-.75h7c2.34 0 4.26.78 5.5 2.02A6.22 6.22 0 0123 12.5c0 1.62-.52 3.26-1.75 4.48a7.69 7.69 0 01-5.5 2.02H7.56l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06L7.56 17.5h8.19c1.99 0 3.43-.66 4.35-1.58a4.81 4.81 0 001.4-3.42c0-1.25-.47-2.5-1.4-3.42a5.97 5.97 0 00-4.35-1.58h-7A.75.75 0 018 6.75z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownLeft28Regular;