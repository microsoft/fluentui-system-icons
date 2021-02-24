import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 11a5 5 0 005 5h4.5a.5.5 0 000-1H9a4 4 0 010-8h5.3l-2.7 2.7a.5.5 0 10.7.7l3.54-3.53a.5.5 0 00.13-.5.5.5 0 00-.14-.25L12.3 2.6a.5.5 0 10-.71.7L14.29 6H9a5 5 0 00-5 5z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpRight20Regular;