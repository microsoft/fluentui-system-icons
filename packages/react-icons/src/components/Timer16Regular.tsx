import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Timer16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7.5 5a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M13.5 9a6 6 0 11-12 0 6 6 0 0112 0zm-1 0a5 5 0 10-10 0 5 5 0 0010 0z" fill={primaryFill} /><path d="M12.45 2.64a.5.5 0 10-.7.7l1.4 1.41a.5.5 0 10.7-.7l-1.4-1.4z" fill={primaryFill} /></svg>;
};

export default Timer16Regular;