import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarEmphasis24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.21 3.1c-.5-1-1.93-1-2.42 0L8.43 7.88l-5.27.77a1.35 1.35 0 00-.75 2.3l3.82 3.72-.9 5.25a1.35 1.35 0 001.95 1.42L12 18.86l4.72 2.48c.99.52 2.14-.32 1.96-1.42l-.9-5.25 3.81-3.72c.8-.78.36-2.14-.75-2.3l-5.27-.77L13.2 3.1z" fill={primaryFill} /><path d="M1.16 3.78c-.25.32-.2.8.12 1.06l2.5 2a.75.75 0 10.94-1.18l-2.5-2a.75.75 0 00-1.06.12z" fill={primaryFill} /><path d="M22.84 18.22c.25-.32.2-.8-.12-1.06l-2.5-2a.75.75 0 00-.94 1.18l2.5 2c.32.25.8.2 1.06-.12z" fill={primaryFill} /><path d="M1.28 17.16a.75.75 0 10.94 1.18l2.5-2a.75.75 0 00-.94-1.18l-2.5 2z" fill={primaryFill} /><path d="M22.84 3.78c.25.32.2.8-.12 1.06l-2.5 2a.75.75 0 01-.94-1.18l2.5-2c.32-.25.8-.2 1.06.12z" fill={primaryFill} /></svg>;
};

export default StarEmphasis24Filled;