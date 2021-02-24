import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSort20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 5.71L2.86 8.35a.5.5 0 01-.71-.7l3.47-3.47a.5.5 0 01.74-.03l3.5 3.5a.5.5 0 01-.71.7L6.5 5.71v9.79a.5.5 0 01-1 0V5.71z" fill={primaryFill} /><path d="M14.5 14.29l2.65-2.64a.5.5 0 01.7.7l-3.46 3.47a.5.5 0 01-.74.03h-.01l-3.5-3.5a.5.5 0 11.72-.7l2.64 2.64V4.5a.5.5 0 011 0v9.79z" fill={primaryFill} /></svg>;
};

export default ArrowSort20Regular;