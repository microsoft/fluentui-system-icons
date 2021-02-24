import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HatGraduation16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.63 2.45a2.5 2.5 0 012.74 0l5.4 3.53a.5.5 0 01.01.83L9.4 10.45a2.5 2.5 0 01-2.8 0L2 7.35v3.15a.5.5 0 11-1 0v-4a.5.5 0 010-.05.5.5 0 01.23-.47l5.4-3.53z" fill={primaryFill} /><path d="M3 11.5V9.23l3.04 2.05c1.18.8 2.74.8 3.92 0L13 9.23v2.27a.5.5 0 01-.12.32l-.38-.32.38.32v.01l-.03.03a3.6 3.6 0 01-.32.32A6.57 6.57 0 018 14a6.57 6.57 0 01-4.53-1.82 5.42 5.42 0 01-.32-.32l-.02-.03h-.01l.38-.33-.38.32A.5.5 0 013 11.5z" fill={primaryFill} /></svg>;
};

export default HatGraduation16Filled;