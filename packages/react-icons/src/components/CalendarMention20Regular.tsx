import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarMention20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v4.92a4.96 4.96 0 00-1-.32V7H4v7.5c0 .83.67 1.5 1.5 1.5h4.6c.07.35.18.68.32 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /><path d="M15 12a3 3 0 101.28 5.71.5.5 0 11.44.9A4 4 0 1119 15v.51a1.5 1.5 0 01-2.65.97A2 2 0 0113 15a2 2 0 013.17-1.62.5.5 0 01.83.37v1.75a.5.5 0 101 0V15a3 3 0 00-3-3zm-1 3a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
};

export default CalendarMention20Regular;