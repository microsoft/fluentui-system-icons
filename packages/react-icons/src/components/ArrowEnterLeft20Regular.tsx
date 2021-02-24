import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowEnterLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.76 12l3.33 3.14a.5.5 0 01-.68.72l-4.25-4a.5.5 0 010-.72l4.25-4a.5.5 0 11.68.72L3.76 11H15a2 2 0 002-2V4.5a.5.5 0 011 0V9a3 3 0 01-3 3H3.76z" fill={primaryFill} /></svg>;
};

export default ArrowEnterLeft20Regular;