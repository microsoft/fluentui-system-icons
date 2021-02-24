import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockOpen24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a4 4 0 013.77 2.67 1 1 0 01-1.84.77l-.04-.1a2 2 0 00-3.88.51V8h7.74c1.2 0 2.17.93 2.24 2.1l.01.15v9.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75v-9.5c0-1.2.93-2.17 2.1-2.24L6.25 8H8V6a4 4 0 014-4zm0 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default LockOpen24Filled;