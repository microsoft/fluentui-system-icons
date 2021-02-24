import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Prohibited28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm7.94 5.12L7.12 21.94A10.5 10.5 0 0021.93 7.13zM14 3.5a10.5 10.5 0 00-7.94 17.38L20.88 6.06A10.46 10.46 0 0014 3.5z" fill={primaryFill} /></svg>;
};

export default Prohibited28Regular;