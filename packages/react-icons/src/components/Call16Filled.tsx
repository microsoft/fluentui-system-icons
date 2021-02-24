import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Call16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.76 7.02l1.07-.98a2 2 0 00.52-2.18l-.46-1.22a1.92 1.92 0 00-2.35-1.16C3.82 2 2.5 3.6 2.9 5.49a15.9 15.9 0 004.77 8.24c1.44 1.3 3.49.98 4.8-.25.74-.68.81-1.82.18-2.6l-.84-1.01a2 2 0 00-2.15-.64l-1.39.44a6.6 6.6 0 01-.93-1.23 6.27 6.27 0 01-.6-1.42z" fill={primaryFill} /></svg>;
};

export default Call16Filled;