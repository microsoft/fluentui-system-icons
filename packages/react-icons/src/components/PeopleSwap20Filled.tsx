import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleSwap20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 12a2 2 0 00-2-2H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.46 0 .9-.03 1.3-.08l-.36-.36a1.5 1.5 0 010-2.12l2-2A1.5 1.5 0 0113 13.5V12z" fill={primaryFill} /><path d="M17.8 13.69c.13-.37.2-.76.2-1.19V12a2 2 0 00-2-2h-2.76l.13.16c.4.51.63 1.15.63 1.84v1.5a1.5 1.5 0 012.56-1.06l1.25 1.25z" fill={primaryFill} /><path d="M11 5.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z" fill={primaryFill} /><path d="M17 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /><path d="M11.15 17.85a.5.5 0 00.7-.7L10.71 16h5.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L16.29 15h-5.58l1.14-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2z" fill={primaryFill} /></svg>;
};

export default PeopleSwap20Filled;