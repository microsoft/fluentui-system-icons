import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShieldError24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.45 2.15C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11c0 5-2.96 8.68-8.73 10.95a.75.75 0 01-.54 0C5.96 19.68 3 16 3 11V5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0zM12 3.68a14.36 14.36 0 01-7.5 2.8V11c0 4.26 2.45 7.38 7.5 9.44 5.05-2.06 7.5-5.18 7.5-9.44V6.48a14.36 14.36 0 01-7.5-2.8zM12 16a.75.75 0 110 1.5.75.75 0 010-1.5zm0-9c.38 0 .7.29.74.65l.01.1v6.5a.75.75 0 01-1.5.1v-6.6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default ShieldError24Regular;