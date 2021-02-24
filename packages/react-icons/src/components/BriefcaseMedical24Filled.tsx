import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BriefcaseMedical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3.75a.75.75 0 00-.75-.75h-6.6a.75.75 0 00-.65.75V7H6.25A3.25 3.25 0 003 10.25v6.5C3 18.55 4.46 20 6.25 20h11.5c1.8 0 3.25-1.46 3.25-3.25v-6.5C21 8.45 19.54 7 17.75 7H16V3.75zm-6.5.75h5V7h-5V4.5zm2 11.25V14H9.75a.75.75 0 010-1.5h1.75v-1.75a.75.75 0 011.5 0v1.75h1.75a.75.75 0 010 1.5H13v1.75a.75.75 0 01-1.5 0z" fill={primaryFill} /></svg>;
};

export default BriefcaseMedical24Filled;