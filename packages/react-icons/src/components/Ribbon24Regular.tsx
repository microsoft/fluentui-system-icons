import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Ribbon24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a7 7 0 015 11.9v7.35c0 .57-.6.92-1.1.67l-.08-.06L12 19.18l-3.82 2.68a.75.75 0 01-1.17-.5v-.11L7 13.9A7 7 0 0112 2zm3.5 17.8v-4.74a6.97 6.97 0 01-7 0v4.74l3.07-2.15a.75.75 0 01.76-.06l.1.06 3.07 2.16v-4.75 4.75zM12 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" fill={primaryFill} /></svg>;
};

export default Ribbon24Regular;