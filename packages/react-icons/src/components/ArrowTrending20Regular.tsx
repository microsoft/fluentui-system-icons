import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowTrending20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.96 5.3a.5.5 0 00-.46-.3h-6a.5.5 0 000 1h4.8l-5.8 5.8-2.15-2.15a.5.5 0 00-.7 0l-5.5 5.5a.5.5 0 00.7.7L8 10.71l2.15 2.14c.2.2.5.2.7 0L17 6.71v4.79a.5.5 0 001 0v-6a.5.5 0 00-.04-.2z" fill={primaryFill} /></svg>;
};

export default ArrowTrending20Regular;