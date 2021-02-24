import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M9 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M12 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal16Regular;