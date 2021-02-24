import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReOrder16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 9h11a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5h-11zm0-3h11a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5h-11z" fill={primaryFill} /></svg>;
};

export default ReOrder16Regular;