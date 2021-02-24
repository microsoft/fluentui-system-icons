import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarPerson20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v3.26a3 3 0 00-1-.59V7H4v7.5c0 .83.67 1.5 1.5 1.5h4.53c.03.35.1.69.21 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /><path d="M16 9.27a2 2 0 11-2 3.46 2 2 0 012-3.46z" fill={primaryFill} /><path d="M11.03 16a3.83 3.83 0 01-.03-.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.18 3.18 0 0111.03 16z" fill={primaryFill} /></svg>;
};

export default CalendarPerson20Regular;