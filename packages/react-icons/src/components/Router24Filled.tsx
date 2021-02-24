import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Router24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5A7.5 7.5 0 004.5 11v.25a.75.75 0 01-1.5 0V11a9 9 0 0118 0v.25a.75.75 0 01-1.5 0V11A7.5 7.5 0 0012 3.5z" fill={primaryFill} /><path d="M12 6.5A4.5 4.5 0 007.5 11v.25a.75.75 0 01-1.5 0V11a6 6 0 1112 0v.25a.75.75 0 01-1.5 0V11A4.5 4.5 0 0012 6.5z" fill={primaryFill} /><path d="M9 11a3 3 0 113.75 2.9V16H18a3 3 0 110 6H6a3 3 0 110-6h5.25v-2.1A3 3 0 019 11z" fill={primaryFill} /></svg>;
};

export default Router24Filled;