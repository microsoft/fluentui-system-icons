import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreVertical24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 7.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" fill={primaryFill} /><path d="M12 13.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z" fill={primaryFill} /><path d="M10.25 18a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z" fill={primaryFill} /></svg>;
};

export default MoreVertical24Regular;