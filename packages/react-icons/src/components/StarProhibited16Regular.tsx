import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarProhibited16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.8 2.1a.9.9 0 00-1.6 0L5.66 5.18l-3.4.5a.9.9 0 00-.5 1.53l2.46 2.4L3.65 13a.9.9 0 001.3.95l.92-.48a5.49 5.49 0 01-.46-.89l-.74.39.35-2.02a5.58 5.58 0 01.14-1.76.9.9 0 00-.19-.26l-2.35-2.3 3.25-.46a.9.9 0 00.68-.5L8 2.73l1.2 2.42a5.5 5.5 0 011.04-.14L8.81 2.1z" fill={primaryFill} /><path d="M6 10.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6z" fill={primaryFill} /></svg>;
};

export default StarProhibited16Regular;