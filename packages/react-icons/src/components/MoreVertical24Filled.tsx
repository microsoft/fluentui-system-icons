import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M12 14a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M10 18a2 2 0 104 0 2 2 0 00-4 0z" fill={primaryFill} /></svg>;
};

export default MoreVertical24Filled;