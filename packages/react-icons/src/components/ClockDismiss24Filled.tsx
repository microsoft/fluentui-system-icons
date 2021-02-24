import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClockDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM13 1a10 10 0 11-1 19.95A6.5 6.5 0 003.05 12 10 10 0 0113 1zM3.72 14.59l-.07.06-.06.07a.5.5 0 000 .56l.06.07 2.14 2.15-2.14 2.15-.06.07a.5.5 0 000 .56l.06.07.07.06c.17.12.4.12.56 0l.07-.06 2.15-2.14 2.15 2.14.07.06c.17.12.4.12.56 0l.07-.06.06-.07a.5.5 0 000-.56l-.06-.07-2.14-2.15 2.14-2.15.06-.07a.5.5 0 000-.56l-.06-.07-.07-.06a.5.5 0 00-.56 0l-.07.06-2.15 2.14-2.15-2.14-.07-.06a.5.5 0 00-.49-.04l-.07.04zM12.25 5a.75.75 0 00-.75.75v5.5c0 .42.33.75.75.75h4a.75.75 0 000-1.5H13V5.75a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
};

export default ClockDismiss24Filled;