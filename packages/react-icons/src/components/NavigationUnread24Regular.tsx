import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NavigationUnread24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 8.5a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" fill={primaryFill} /><path d="M15.58 6.5a3.77 3.77 0 010-1.5H2.74l-.1.01a.75.75 0 00.1 1.5h12.83z" fill={primaryFill} /><path d="M21.25 18H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M2.75 11.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h.1z" fill={primaryFill} /></svg>;
};

export default NavigationUnread24Regular;