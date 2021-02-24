import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarAdd16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.8 2.1a.9.9 0 00-1.6 0L5.66 5.18l-3.4.5a.9.9 0 00-.5 1.53l2.46 2.4L3.65 13a.9.9 0 001.3.95l.92-.48a5.49 5.49 0 01-.46-.89l-.74.39.56-3.24a.9.9 0 00-.26-.8l-2.35-2.3 3.25-.46a.9.9 0 00.68-.5L8 2.73l1.2 2.42a5.5 5.5 0 011.04-.14L8.81 2.1zM5 10.5v-.1.1z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H8.5a.5.5 0 000 1H10v1.5a.5.5 0 101 0V11h1.5a.5.5 0 100-1H11V8.5z" fill={primaryFill} /></svg>;
};

export default StarAdd16Regular;