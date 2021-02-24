import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const People32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 16a3 3 0 013 3l-.01 1.5c.2 3.67-2.62 5.5-7.87 5.5C6.89 26 4 24.2 4 20.55V19a3 3 0 013-3h10zm8 0a3 3 0 013 3v1.05c.17 3.3-2.33 4.95-6.9 4.95-.62 0-1.2-.03-1.74-.1a4.89 4.89 0 001.29-1.9h.45c3.57 0 5-.94 4.9-2.9V19a1 1 0 00-1-1h-4.13a4 4 0 00-1.23-2h5.35zm-8 2H7a1 1 0 00-1 1v1.55C6 22.85 7.86 24 12.12 24c4.25 0 6-1.13 5.87-3.45V19a1 1 0 00-1-1zM12 4a5 5 0 110 10 5 5 0 010-10zm10 2a4 4 0 110 8 4 4 0 010-8zM12 6a3 3 0 100 6 3 3 0 000-6zm10 2a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
};

export default People32Regular;