import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bluetooth24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 12.97l2.68 2.24-2.88 3.12v-5.2l.2-.16zm1.17-.97l3.08-2.57a.75.75 0 00.07-1.08l-4.71-5.1a.75.75 0 00-1.3.5v5.86l-1.13-.94a.75.75 0 10-.96 1.16L10 11.56v.87l-2.08 1.74a.75.75 0 00.96 1.15l1.12-.94v5.87a.75.75 0 001.3.5l4.72-5.1a.75.75 0 00-.07-1.09L12.87 12zm-1.17-.98l-.2-.16V5.67l2.88 3.12-2.68 2.23z" fill={primaryFill} /></svg>;
};

export default Bluetooth24Regular;