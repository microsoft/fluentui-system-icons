import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Call32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.43 10.52c-.38-2.52 1.39-4.78 4.1-5.6 1-.31 2.06.21 2.43 1.19l.87 2.32a2 2 0 01-.52 2.17l-2.59 2.37a1 1 0 00-.3.94l.02.1a10.54 10.54 0 00.33 1.17c.24.73.62 1.72 1.2 2.7a14.53 14.53 0 002.58 3.26l.08.07a1 1 0 00.97.21l3.34-1.05a2 2 0 012.15.63l1.58 1.93c.66.8.58 1.97-.18 2.68-2.07 1.93-4.92 2.33-6.9.73a25.46 25.46 0 01-9.16-15.82zm6.08 3.53l2.15-1.97a4 4 0 001.04-4.35l-.87-2.32A3.98 3.98 0 0010.95 3c-3.37 1.03-6.07 4.05-5.5 7.82a27.46 27.46 0 009.88 17.09c2.98 2.38 6.95 1.57 9.53-.84a3.96 3.96 0 00.36-5.41l-1.59-1.93a4 4 0 00-4.29-1.27l-2.77.87a13.17 13.17 0 01-1.88-2.44 12.54 12.54 0 01-1.18-2.84z" fill={primaryFill} /></svg>;
};

export default Call32Regular;